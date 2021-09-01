package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/hello/candle/x/candle/types"
)

func (k msgServer) CreateBidList(goCtx context.Context, msg *types.MsgCreateBidList) (*types.MsgCreateBidListResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var bidList = types.BidList{
		Creator:   msg.Creator,
		AuctionId: msg.AuctionId,
		Amt:       msg.Amt,
	}

	id := k.AppendBidList(
		ctx,
		bidList,
	)

	return &types.MsgCreateBidListResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateBidList(goCtx context.Context, msg *types.MsgUpdateBidList) (*types.MsgUpdateBidListResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var bidList = types.BidList{
		Creator:   msg.Creator,
		Id:        msg.Id,
		AuctionId: msg.AuctionId,
		Amt:       msg.Amt,
	}

	// Checks that the element exists
	if !k.HasBidList(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetBidListOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetBidList(ctx, bidList)

	return &types.MsgUpdateBidListResponse{}, nil
}

func (k msgServer) DeleteBidList(goCtx context.Context, msg *types.MsgDeleteBidList) (*types.MsgDeleteBidListResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasBidList(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetBidListOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBidList(ctx, msg.Id)

	return &types.MsgDeleteBidListResponse{}, nil
}
