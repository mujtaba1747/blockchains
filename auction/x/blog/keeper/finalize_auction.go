// x/blog/keeper/FinalizeAuction.go
package keeper

import (
	"os"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/blog/x/blog/types"
)

// GetFinalizeAuctionCount get the total number of FinalizeAuction
func (k Keeper) GetFinalizeAuctionCount(ctx sdk.Context) int64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalizeAuctionCountKey))
	byteKey := types.KeyPrefix(types.FinalizeAuctionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseInt(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to int64
		panic("cannot decode count")
	}

	return count
}

// SetFinalizeAuctionCount set the total number of FinalizeAuction
func (k Keeper) SetFinalizeAuctionCount(ctx sdk.Context, count int64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalizeAuctionCountKey))
	byteKey := types.KeyPrefix(types.FinalizeAuctionCountKey)
	bz := []byte(strconv.FormatInt(count, 10))
	store.Set(byteKey, bz)
}

func (k Keeper) CreateFinalizeAuction(ctx sdk.Context, msg types.MsgFinalizeAuction) (err error) {

	// if !k.HasAuction(ctx, msg.GetAuctionId()) {
	// 	return errors.New("No Auction found with id : " + msg.AuctionId + " found")
	// }

	// auction := k.GetAuction(ctx, msg.GetAuctionId())
	// if ctx.BlockHeight() < auction.GetBlockHeight()+auction.GetDeadline() {
	// 	return errors.New("Auction not over, try later")
	// }

	bids := k.GetAllBid(ctx)
	var maxAmt int64 = 0
	var winner string

	for _, b := range bids {
		if b.GetAuctionId() == msg.GetAuctionId() && b.GetAmt() > maxAmt {
			maxAmt = b.GetAmt()
			winner = b.GetCreator()
		}
	}

	// Create the FinalizeAuction
	count := k.GetFinalizeAuctionCount(ctx)
	var FinalizeAuction = types.FinalizeAuction{
		Creator:   msg.Creator,
		Id:        strconv.FormatInt(count, 10),
		AuctionId: msg.AuctionId,
		Winner:    winner,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalizeAuctionKey))
	key := types.KeyPrefix(types.FinalizeAuctionKey + FinalizeAuction.Id)
	value := k.cdc.MustMarshalBinaryBare(&FinalizeAuction)
	store.Set(key, value)

	posts := k.GetAllFinalizeAuction(ctx)
	fil, _ := os.OpenFile("/home/syed/go/log.txt", os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0600)
	fil.WriteString("Fin Auction :\n")
	for _, a := range posts {
		fil.WriteString(a.String() + "\n")
	}
	fil.Close()

	// Update FinalizeAuction count
	k.SetFinalizeAuctionCount(ctx, count+1)
	return nil
}

func (k Keeper) GetFinalizeAuction(ctx sdk.Context, key string) types.FinalizeAuction {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalizeAuctionKey))
	var FinalizeAuction types.FinalizeAuction
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.FinalizeAuctionKey+key)), &FinalizeAuction)
	return FinalizeAuction
}

func (k Keeper) HasFinalizeAuction(ctx sdk.Context, id string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalizeAuctionKey))
	return store.Has(types.KeyPrefix(types.FinalizeAuctionKey + id))
}

func (k Keeper) GetFinalizeAuctionOwner(ctx sdk.Context, key string) string {
	return k.GetFinalizeAuction(ctx, key).Creator
}

func (k Keeper) GetAllFinalizeAuction(ctx sdk.Context) (msgs []types.FinalizeAuction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FinalizeAuctionKey))
	iterator := sdk.KVStorePrefixIterator(store, types.KeyPrefix(types.FinalizeAuctionKey))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var msg types.FinalizeAuction
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return
}
