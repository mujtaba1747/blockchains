// x/blog/handler_bid.go
package blog

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/blog/x/blog/keeper"
	"github.com/example/blog/x/blog/types"
)

func handleFinalizeAuction(ctx sdk.Context, k keeper.Keeper, msg *types.MsgFinalizeAuction) (*sdk.Result, error) {
	if err := k.CreateFinalizeAuction(ctx, *msg); err != nil {
		return nil, err
	}

	return &sdk.Result{Events: ctx.EventManager().ABCIEvents()}, nil
}
