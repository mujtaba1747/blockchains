// x/blog/keeper/Auction.go
package keeper

import (
	"os"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/blog/x/blog/types"
)

// GetAuctionCount get the total number of Auction
func (k Keeper) GetAuctionCount(ctx sdk.Context) int64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionCountKey))
	byteKey := types.KeyPrefix(types.AuctionCountKey)
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

// SetAuctionCount set the total number of Auction
func (k Keeper) SetAuctionCount(ctx sdk.Context, count int64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionCountKey))
	byteKey := types.KeyPrefix(types.AuctionCountKey)
	bz := []byte(strconv.FormatInt(count, 10))
	store.Set(byteKey, bz)
}

func (k Keeper) CreateAuction(ctx sdk.Context, msg types.MsgCreateAuction) {
	// Create the Auction
	count := k.GetAuctionCount(ctx)

	var Auction = types.Auction{
		Creator:     msg.Creator,
		Id:          strconv.FormatInt(count, 10),
		Title:       msg.Title,
		Body:        msg.Body,
		Deadline:    msg.Deadline,
		BlockHeight: ctx.BlockHeight(),
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionKey))
	key := types.KeyPrefix(types.AuctionKey + Auction.Id)
	value := k.cdc.MustMarshalBinaryBare(&Auction)
	store.Set(key, value)

	// Update Auction count
	posts := k.GetAllAuction(ctx)
	fil, _ := os.OpenFile("/home/syed/go/log.txt", os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0600)
	fil.WriteString("Auctions :\n")
	for _, a := range posts {
		fil.WriteString(a.String() + "\n")
	}
	fil.Close()

	k.SetAuctionCount(ctx, count+1)

	// TODO : Remove this, getAll was meant for debugging

	/*
		msgs := k.GetAllAuction(ctx)
		fil, _ := os.Create("/home/syed/go/tempfile")
		defer fil.Close()
		for _, m := range msgs {
			// fmt.Println(m.String())
			fil.WriteString(m.String())
		}
	*/
}

func (k Keeper) GetAuction(ctx sdk.Context, key string) types.Auction {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionKey))
	var Auction types.Auction
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.AuctionKey+key)), &Auction)
	return Auction
}

func (k Keeper) HasAuction(ctx sdk.Context, id string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionKey))
	return store.Has(types.KeyPrefix(types.AuctionKey + id))
}

func (k Keeper) GetAuctionOwner(ctx sdk.Context, key string) string {
	return k.GetAuction(ctx, key).Creator
}

func (k Keeper) GetAllAuction(ctx sdk.Context) (msgs []types.Auction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionKey))
	iterator := sdk.KVStorePrefixIterator(store, types.KeyPrefix(types.AuctionKey))

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var msg types.Auction
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return
}
