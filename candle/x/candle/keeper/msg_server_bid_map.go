package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/hello/candle/x/candle/types"
)

func (k msgServer) CreateBidMap(goCtx context.Context, msg *types.MsgCreateBidMap) (*types.MsgCreateBidMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBidMap(ctx, msg.Index)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("index %v already set", msg.Index))
	}

	var bidMap = types.BidMap{
		Index:       msg.Index,
		Creator:     msg.Creator,
		AuctionId:   msg.AuctionId,
		Amt:         msg.Amt,
		BlockHeight: msg.BlockHeight,
	}

	k.SetBidMap(
		ctx,
		bidMap,
	)
	return &types.MsgCreateBidMapResponse{}, nil
}

func (k msgServer) UpdateBidMap(goCtx context.Context, msg *types.MsgUpdateBidMap) (*types.MsgUpdateBidMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBidMap(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var bidMap = types.BidMap{
		Index:       msg.Index,
		Creator:     msg.Creator,
		AuctionId:   msg.AuctionId,
		Amt:         msg.Amt,
		BlockHeight: msg.BlockHeight,
	}

	k.SetBidMap(ctx, bidMap)

	return &types.MsgUpdateBidMapResponse{}, nil
}

func (k msgServer) DeleteBidMap(goCtx context.Context, msg *types.MsgDeleteBidMap) (*types.MsgDeleteBidMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBidMap(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBidMap(ctx, msg.Index)

	return &types.MsgDeleteBidMapResponse{}, nil
}
