package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/hello/candle/x/candle/types"
)

func createNAuctionMap(keeper *Keeper, ctx sdk.Context, n int) []types.AuctionMap {
	items := make([]types.AuctionMap, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetAuctionMap(ctx, items[i])
	}
	return items
}

func TestAuctionMapGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAuctionMap(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetAuctionMap(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestAuctionMapRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAuctionMap(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAuctionMap(ctx, item.Index)
		_, found := keeper.GetAuctionMap(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestAuctionMapGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAuctionMap(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllAuctionMap(ctx))
}
