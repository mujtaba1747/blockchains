package keeper

import (
	"github.com/cosmonaut/scavenge/x/scavenge/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetScavenge set a specific scavenge in the store from its index
func (k Keeper) SetScavenge(ctx sdk.Context, scavenge types.Scavenge) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScavengeKey))
	b := k.cdc.MustMarshalBinaryBare(&scavenge)
	store.Set(types.KeyPrefix(scavenge.Index), b)
}

// GetScavenge returns a scavenge from its index
func (k Keeper) GetScavenge(ctx sdk.Context, index string) (val types.Scavenge, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScavengeKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveScavenge removes a scavenge from the store
func (k Keeper) RemoveScavenge(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScavengeKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllScavenge returns all scavenge
func (k Keeper) GetAllScavenge(ctx sdk.Context) (list []types.Scavenge) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScavengeKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Scavenge
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
