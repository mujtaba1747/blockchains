package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
)

// SetBidMap set a specific bidMap in the store from its index
func (k Keeper) SetBidMap(ctx sdk.Context, bidMap types.BidMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidMapKey))
	b := k.cdc.MustMarshalBinaryBare(&bidMap)
	store.Set(types.KeyPrefix(bidMap.Index), b)
}

// GetBidMap returns a bidMap from its index
func (k Keeper) GetBidMap(ctx sdk.Context, index string) (val types.BidMap, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidMapKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveBidMap removes a bidMap from the store
func (k Keeper) RemoveBidMap(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidMapKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllBidMap returns all bidMap
func (k Keeper) GetAllBidMap(ctx sdk.Context) (list []types.BidMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidMapKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BidMap
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
