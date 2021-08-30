// x/blog/keeper/Bid.go
package keeper

import (
	"os"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/blog/x/blog/types"
)

// GetBidCount get the total number of Bid
func (k Keeper) GetBidCount(ctx sdk.Context) int64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidCountKey))
	byteKey := types.KeyPrefix(types.BidCountKey)
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

// SetBidCount set the total number of Bid
func (k Keeper) SetBidCount(ctx sdk.Context, count int64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidCountKey))
	byteKey := types.KeyPrefix(types.BidCountKey)
	bz := []byte(strconv.FormatInt(count, 10))
	store.Set(byteKey, bz)
}

func (k Keeper) CreateBid(ctx sdk.Context, msg types.MsgCreateBid) (err error) {

	// if !k.HasAuction(ctx, msg.AuctionId) {
	// 	return errors.New("No Auction found with id : " + msg.AuctionId + " found")
	// }

	// auction := k.GetAuction(ctx, msg.AuctionId)
	// if ctx.BlockHeight() >= auction.GetBlockHeight()+auction.GetDeadline() {
	// 	return errors.New("Late bid : Auction already ended")
	// }
	// Create the Bid
	count := k.GetBidCount(ctx)
	var Bid = types.Bid{
		Creator:   msg.Creator,
		Id:        strconv.FormatInt(count, 10),
		AuctionId: msg.AuctionId,
		Amt:       msg.Amt,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidKey))
	key := types.KeyPrefix(types.BidKey + Bid.Id)
	value := k.cdc.MustMarshalBinaryBare(&Bid)
	store.Set(key, value)

	// Update Bid count
	posts := k.GetAllBid(ctx)
	fil, _ := os.OpenFile("/home/syed/go/log.txt", os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0600)
	fil.WriteString("Bids :\n")
	for _, a := range posts {
		fil.WriteString(a.String() + "\n")
	}
	fil.Close()
	k.SetBidCount(ctx, count+1)
	return nil
}

func (k Keeper) GetBid(ctx sdk.Context, key string) types.Bid {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidKey))
	var Bid types.Bid
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.BidKey+key)), &Bid)
	return Bid
}

func (k Keeper) HasBid(ctx sdk.Context, id string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidKey))
	return store.Has(types.KeyPrefix(types.BidKey + id))
}

func (k Keeper) GetBidOwner(ctx sdk.Context, key string) string {
	return k.GetBid(ctx, key).Creator
}

func (k Keeper) GetAllBid(ctx sdk.Context) (msgs []types.Bid) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidKey))
	iterator := sdk.KVStorePrefixIterator(store, types.KeyPrefix(types.BidKey))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var msg types.Bid
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return
}
