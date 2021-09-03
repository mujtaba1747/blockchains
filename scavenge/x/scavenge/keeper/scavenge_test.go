package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
)

func createNScavenge(keeper *Keeper, ctx sdk.Context, n int) []types.Scavenge {
	items := make([]types.Scavenge, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetScavenge(ctx, items[i])
	}
	return items
}

func TestScavengeGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNScavenge(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetScavenge(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestScavengeRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNScavenge(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveScavenge(ctx, item.Index)
		_, found := keeper.GetScavenge(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestScavengeGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNScavenge(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllScavenge(ctx))
}
