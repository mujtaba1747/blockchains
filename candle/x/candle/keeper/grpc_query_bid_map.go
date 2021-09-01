package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/hello/candle/x/candle/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BidMapAll(c context.Context, req *types.QueryAllBidMapRequest) (*types.QueryAllBidMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bidMaps []*types.BidMap
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	bidMapStore := prefix.NewStore(store, types.KeyPrefix(types.BidMapKey))

	pageRes, err := query.Paginate(bidMapStore, req.Pagination, func(key []byte, value []byte) error {
		var bidMap types.BidMap
		if err := k.cdc.UnmarshalBinaryBare(value, &bidMap); err != nil {
			return err
		}

		bidMaps = append(bidMaps, &bidMap)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBidMapResponse{BidMap: bidMaps, Pagination: pageRes}, nil
}

func (k Keeper) BidMap(c context.Context, req *types.QueryGetBidMapRequest) (*types.QueryGetBidMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBidMap(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetBidMapResponse{BidMap: &val}, nil
}
