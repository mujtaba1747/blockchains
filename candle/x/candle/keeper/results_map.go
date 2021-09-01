package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
)

// SetResultsMap set a specific resultsMap in the store from its index
func (k Keeper) SetResultsMap(ctx sdk.Context, resultsMap types.ResultsMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResultsMapKey))
	b := k.cdc.MustMarshalBinaryBare(&resultsMap)
	store.Set(types.KeyPrefix(resultsMap.Index), b)
}

// GetResultsMap returns a resultsMap from its index
func (k Keeper) GetResultsMap(ctx sdk.Context, index string) (val types.ResultsMap, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResultsMapKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveResultsMap removes a resultsMap from the store
func (k Keeper) RemoveResultsMap(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResultsMapKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllResultsMap returns all resultsMap
func (k Keeper) GetAllResultsMap(ctx sdk.Context) (list []types.ResultsMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ResultsMapKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ResultsMap
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
