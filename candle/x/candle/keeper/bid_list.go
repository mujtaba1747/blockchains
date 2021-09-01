package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
	"strconv"
)

// GetBidListCount get the total number of TypeName.LowerCamel
func (k Keeper) GetBidListCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListCountKey))
	byteKey := types.KeyPrefix(types.BidListCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetBidListCount set the total number of bidList
func (k Keeper) SetBidListCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListCountKey))
	byteKey := types.KeyPrefix(types.BidListCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendBidList appends a bidList in the store with a new id and update the count
func (k Keeper) AppendBidList(
	ctx sdk.Context,
	bidList types.BidList,
) uint64 {
	// Create the bidList
	count := k.GetBidListCount(ctx)

	// Set the ID of the appended value
	bidList.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&bidList)
	store.Set(GetBidListIDBytes(bidList.Id), appendedValue)

	// Update bidList count
	k.SetBidListCount(ctx, count+1)

	return count
}

// SetBidList set a specific bidList in the store
func (k Keeper) SetBidList(ctx sdk.Context, bidList types.BidList) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListKey))
	b := k.cdc.MustMarshalBinaryBare(&bidList)
	store.Set(GetBidListIDBytes(bidList.Id), b)
}

// GetBidList returns a bidList from its id
func (k Keeper) GetBidList(ctx sdk.Context, id uint64) types.BidList {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListKey))
	var bidList types.BidList
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBidListIDBytes(id)), &bidList)
	return bidList
}

// HasBidList checks if the bidList exists in the store
func (k Keeper) HasBidList(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListKey))
	return store.Has(GetBidListIDBytes(id))
}

// GetBidListOwner returns the creator of the
func (k Keeper) GetBidListOwner(ctx sdk.Context, id uint64) string {
	return k.GetBidList(ctx, id).Creator
}

// RemoveBidList removes a bidList from the store
func (k Keeper) RemoveBidList(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListKey))
	store.Delete(GetBidListIDBytes(id))
}

// GetAllBidList returns all bidList
func (k Keeper) GetAllBidList(ctx sdk.Context) (list []types.BidList) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BidList
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBidListIDBytes returns the byte representation of the ID
func GetBidListIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBidListIDFromBytes returns ID in uint64 format from a byte array
func GetBidListIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
