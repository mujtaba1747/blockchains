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

func TestBidAfterAuction(t *testing.T) {
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

	auction, isFound := keeper.GetAuctionMap(ctx, createMsg.Title)
	require.True(t, isFound)

	ctx = ctx.WithBlockHeight(int64(auction.BlockHeight) + int64(auction.Deadline) + 1)
	wctx = sdk.WrapSDKContext(ctx)

	msgCreateBid := &types.MsgCreateBid{
		Creator:   creator,
		AuctionId: auction.Index,
		Amt:       uint64(rand.Uint64()),
	}
	_, err = srv.CreateBid(wctx, msgCreateBid)
	// IMP : We need the err to be Non-nil here
	require.Error(t, err)
}
