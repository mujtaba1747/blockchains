package keeper

import (
	"context"

	"github.com/cosmonaut/nameservice/x/nameservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateName(goCtx context.Context, msg *types.MsgCreateName) (*types.MsgCreateNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateNameResponse{}, nil
}
