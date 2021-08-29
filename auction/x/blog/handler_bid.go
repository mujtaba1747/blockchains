// x/blog/handler_bid.go
package blog

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/blog/x/blog/keeper"
	"github.com/example/blog/x/blog/types"
)

func handleAuctionCreateBid(ctx sdk.Context, k keeper.Keeper, msg *types.MsgCreateBid) (*sdk.Result, error) {
	k.CreateBid(ctx, *msg)

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}
