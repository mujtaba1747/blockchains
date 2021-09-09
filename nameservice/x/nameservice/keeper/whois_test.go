package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/cosmonaut/nameservice/x/nameservice/types"
)

func createNWhois(keeper *Keeper, ctx sdk.Context, n int) []types.Whois {
	items := make([]types.Whois, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Index = fmt.Sprintf("%d", i)
		keeper.SetWhois(ctx, items[i])
	}
	return items
}

func TestWhoisGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNWhois(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetWhois(ctx, item.Index)
		assert.True(t, found)
		assert.Equal(t, item, rst)
	}
}
func TestWhoisRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNWhois(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveWhois(ctx, item.Index)
		_, found := keeper.GetWhois(ctx, item.Index)
		assert.False(t, found)
	}
}

func TestWhoisGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNWhois(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllWhois(ctx))
}
