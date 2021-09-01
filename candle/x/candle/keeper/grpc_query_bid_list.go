package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/hello/candle/x/candle/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BidListAll(c context.Context, req *types.QueryAllBidListRequest) (*types.QueryAllBidListResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bidLists []*types.BidList
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	bidListStore := prefix.NewStore(store, types.KeyPrefix(types.BidListKey))

	pageRes, err := query.Paginate(bidListStore, req.Pagination, func(key []byte, value []byte) error {
		var bidList types.BidList
		if err := k.cdc.UnmarshalBinaryBare(value, &bidList); err != nil {
			return err
		}

		bidLists = append(bidLists, &bidList)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBidListResponse{BidList: bidLists, Pagination: pageRes}, nil
}

func (k Keeper) BidList(c context.Context, req *types.QueryGetBidListRequest) (*types.QueryGetBidListResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bidList types.BidList
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasBidList(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BidListKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBidListIDBytes(req.Id)), &bidList)

	return &types.QueryGetBidListResponse{BidList: &bidList}, nil
}
