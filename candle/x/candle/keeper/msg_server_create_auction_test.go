package keeper

import (
	"math/rand"
	"testing"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
	"github.com/stretchr/testify/require"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
)

func TestCreateAuction(t *testing.T) {
	// Probably not a good idea, better not to seed
	rand.Seed(time.Now().UnixNano())

	keeper, ctx := setupKeeper(t)
	srv := NewMsgServerImpl(*keeper)

	hash := make([]byte, 8)
	_, err := rand.Read(hash)
	require.NoError(t, err)

	blockHeader := tmproto.Header{
		LastBlockId: tmproto.BlockID{
			Hash: hash,
		},
	}

	ctx = ctx.WithBlockHeader(blockHeader)
	wctx := sdk.WrapSDKContext(ctx)

	creator := "alice"
	createMsg := &types.MsgCreateAuction{
		Creator: creator,
		Title:   "test-0",
	}

	_, err = srv.CreateAuction(wctx, createMsg)
	if err != nil {
		t.Log(err)
	}
	require.NoError(t, err)

	_, isFound := keeper.GetAuctionMap(ctx, createMsg.Title)
	require.True(t, isFound)
}
