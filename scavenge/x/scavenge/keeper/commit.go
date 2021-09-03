package keeper

import (
	"github.com/cosmonaut/scavenge/x/scavenge/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetCommit set a specific commit in the store from its index
func (k Keeper) SetCommit(ctx sdk.Context, commit types.Commit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommitKey))
	b := k.cdc.MustMarshalBinaryBare(&commit)
	store.Set(types.KeyPrefix(commit.Index), b)
}

// GetCommit returns a commit from its index
func (k Keeper) GetCommit(ctx sdk.Context, index string) (val types.Commit, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommitKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveCommit removes a commit from the store
func (k Keeper) RemoveCommit(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommitKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllCommit returns all commit
func (k Keeper) GetAllCommit(ctx sdk.Context) (list []types.Commit) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CommitKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Commit
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
