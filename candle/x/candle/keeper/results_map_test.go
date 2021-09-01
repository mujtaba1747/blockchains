package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/hello/candle/x/candle/types"
)

func createNResultsMap(keeper *Keeper, ctx sdk.Context, n int) []types.ResultsMap {
	items := make([]types.ResultsMap, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetResultsMap(ctx, items[i])
	}
	return items
}

func TestResultsMapGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNResultsMap(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetResultsMap(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestResultsMapRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNResultsMap(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveResultsMap(ctx, item.Index)
		_, found := keeper.GetResultsMap(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestResultsMapGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNResultsMap(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllResultsMap(ctx))
}
