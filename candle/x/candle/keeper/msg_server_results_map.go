package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/hello/candle/x/candle/types"
)

func (k msgServer) CreateResultsMap(goCtx context.Context, msg *types.MsgCreateResultsMap) (*types.MsgCreateResultsMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetResultsMap(ctx, msg.Index)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("index %v already set", msg.Index))
	}

	var resultsMap = types.ResultsMap{
		Index:   msg.Index,
		Creator: msg.Creator,
		Winner:  msg.Winner,
		BidId:   msg.BidId,
	}

	k.SetResultsMap(
		ctx,
		resultsMap,
	)
	return &types.MsgCreateResultsMapResponse{}, nil
}

func (k msgServer) UpdateResultsMap(goCtx context.Context, msg *types.MsgUpdateResultsMap) (*types.MsgUpdateResultsMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetResultsMap(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var resultsMap = types.ResultsMap{
		Index:   msg.Index,
		Creator: msg.Creator,
		Winner:  msg.Winner,
		BidId:   msg.BidId,
	}

	k.SetResultsMap(ctx, resultsMap)

	return &types.MsgUpdateResultsMapResponse{}, nil
}

func (k msgServer) DeleteResultsMap(goCtx context.Context, msg *types.MsgDeleteResultsMap) (*types.MsgDeleteResultsMapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetResultsMap(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveResultsMap(ctx, msg.Index)

	return &types.MsgDeleteResultsMapResponse{}, nil
}
