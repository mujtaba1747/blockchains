package keeper

import (
	"context"

	"github.com/cosmonaut/nameservice/x/nameservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateName(goCtx context.Context, msg *types.MsgCreateName) (*types.MsgCreateNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, isFound := k.GetWhois(ctx, msg.Name)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "create-name failed: name already exists")

	}

	whois := types.Whois{
		Index: msg.Name,
		Name:  msg.Name,
	}

	k.SetWhois(ctx, whois)

	return &types.MsgCreateNameResponse{}, nil
}
