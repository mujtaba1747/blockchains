package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
	"github.com/stretchr/testify/assert"
)

func createNBidList(keeper *Keeper, ctx sdk.Context, n int) []types.BidList {
	items := make([]types.BidList, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendBidList(ctx, items[i])
	}
	return items
}

func TestBidListGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBidList(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetBidList(ctx, item.Id))
	}
}

func TestBidListExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBidList(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasBidList(ctx, item.Id))
	}
}

func TestBidListRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBidList(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBidList(ctx, item.Id)
		assert.False(t, keeper.HasBidList(ctx, item.Id))
	}
}

func TestBidListGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBidList(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllBidList(ctx))
}

func TestBidListCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBidList(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetBidListCount(ctx))
}
