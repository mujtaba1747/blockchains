package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/hello/candle/x/candle/types"
)

func createNBidMap(keeper *Keeper, ctx sdk.Context, n int) []types.BidMap {
	items := make([]types.BidMap, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetBidMap(ctx, items[i])
	}
	return items
}

func TestBidMapGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBidMap(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBidMap(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestBidMapRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBidMap(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBidMap(ctx, item.Index)
		_, found := keeper.GetBidMap(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestBidMapGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBidMap(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllBidMap(ctx))
}
