package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
)

// SetAuctionMap set a specific auctionMap in the store from its index
func (k Keeper) SetAuctionMap(ctx sdk.Context, auctionMap types.AuctionMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionMapKey))
	b := k.cdc.MustMarshalBinaryBare(&auctionMap)
	store.Set(types.KeyPrefix(auctionMap.Index), b)
}

// GetAuctionMap returns a auctionMap from its index
func (k Keeper) GetAuctionMap(ctx sdk.Context, index string) (val types.AuctionMap, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionMapKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// RemoveAuctionMap removes a auctionMap from the store
func (k Keeper) RemoveAuctionMap(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionMapKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllAuctionMap returns all auctionMap
func (k Keeper) GetAllAuctionMap(ctx sdk.Context) (list []types.AuctionMap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionMapKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AuctionMap
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
