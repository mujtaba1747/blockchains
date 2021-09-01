package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/hello/candle/x/candle/types"
)

func (k msgServer) CreateAuctionMap(goCtx context.Context, msg *types.MsgCreateAuctionMap) (*types.MsgCreateAuctionMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetAuctionMap(ctx, msg.Index)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("index %v already set", msg.Index))
	}

	var auctionMap = types.AuctionMap{
		Index:       msg.Index,
		Creator:     msg.Creator,
		BlockHeight: msg.BlockHeight,
		Deadline:    msg.Deadline,
	}

	k.SetAuctionMap(
		ctx,
		auctionMap,
	)
	return &types.MsgCreateAuctionMapResponse{}, nil
}

func (k msgServer) UpdateAuctionMap(goCtx context.Context, msg *types.MsgUpdateAuctionMap) (*types.MsgUpdateAuctionMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetAuctionMap(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var auctionMap = types.AuctionMap{
		Index:       msg.Index,
		Creator:     msg.Creator,
		BlockHeight: msg.BlockHeight,
		Deadline:    msg.Deadline,
	}

	k.SetAuctionMap(ctx, auctionMap)

	return &types.MsgUpdateAuctionMapResponse{}, nil
}

func (k msgServer) DeleteAuctionMap(goCtx context.Context, msg *types.MsgDeleteAuctionMap) (*types.MsgDeleteAuctionMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetAuctionMap(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveAuctionMap(ctx, msg.Index)

	return &types.MsgDeleteAuctionMapResponse{}, nil
}
