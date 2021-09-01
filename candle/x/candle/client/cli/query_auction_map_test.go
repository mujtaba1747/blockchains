package cli_test

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/hello/candle/testutil/network"
	"github.com/hello/candle/x/candle/client/cli"
	"github.com/hello/candle/x/candle/types"
)

func networkWithAuctionMapObjects(t *testing.T, n int) (*network.Network, []*types.AuctionMap) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	for i := 0; i < n; i++ {
		state.AuctionMapList = append(state.AuctionMapList, &types.AuctionMap{Creator: "ANY", Index: strconv.Itoa(i)})
	}
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), state.AuctionMapList
}

func TestShowAuctionMap(t *testing.T) {
	net, objs := networkWithAuctionMapObjects(t, 2)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc string
		id   string
		args []string
		err  error
		obj  *types.AuctionMap
	}{
		{
			desc: "found",
			id:   objs[0].Index,
			args: common,
			obj:  objs[0],
		},
		{
			desc: "not found",
			id:   "not_found",
			args: common,
			err:  status.Error(codes.InvalidArgument, "not found"),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{tc.id}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowAuctionMap(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetAuctionMapResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.AuctionMap)
				require.Equal(t, tc.obj, resp.AuctionMap)
			}
		})
	}
}

func TestListAuctionMap(t *testing.T) {
	net, objs := networkWithAuctionMapObjects(t, 5)

	ctx := net.Validators[0].ClientCtx
	request := func(next []byte, offset, limit uint64, total bool) []string {
		args := []string{
			fmt.Sprintf("--%s=json", tmcli.OutputFlag),
		}
		if next == nil {
			args = append(args, fmt.Sprintf("--%s=%d", flags.FlagOffset, offset))
		} else {
			args = append(args, fmt.Sprintf("--%s=%s", flags.FlagPageKey, next))
		}
		args = append(args, fmt.Sprintf("--%s=%d", flags.FlagLimit, limit))
		if total {
			args = append(args, fmt.Sprintf("--%s", flags.FlagCountTotal))
		}
		return args
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(objs); i += step {
			args := request(nil, uint64(i), uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListAuctionMap(), args)
			require.NoError(t, err)
			var resp types.QueryAllAuctionMapResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			for j := i; j < len(objs) && j < i+step; j++ {
				assert.Equal(t, objs[j], resp.AuctionMap[j-i])
			}
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(objs); i += step {
			args := request(next, 0, uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListAuctionMap(), args)
			require.NoError(t, err)
			var resp types.QueryAllAuctionMapResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			for j := i; j < len(objs) && j < i+step; j++ {
				assert.Equal(t, objs[j], resp.AuctionMap[j-i])
			}
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		args := request(nil, 0, uint64(len(objs)), true)
		out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListAuctionMap(), args)
		require.NoError(t, err)
		var resp types.QueryAllAuctionMapResponse
		require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
		require.NoError(t, err)
		require.Equal(t, len(objs), int(resp.Pagination.Total))
		require.Equal(t, objs, resp.AuctionMap)
	})
}
