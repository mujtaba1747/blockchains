package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
)

func createNCommit(keeper *Keeper, ctx sdk.Context, n int) []types.Commit {
	items := make([]types.Commit, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetCommit(ctx, items[i])
	}
	return items
}

func TestCommitGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCommit(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCommit(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestCommitRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCommit(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCommit(ctx, item.Index)
		_, found := keeper.GetCommit(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestCommitGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCommit(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllCommit(ctx))
}
