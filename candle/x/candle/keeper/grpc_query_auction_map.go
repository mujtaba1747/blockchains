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

func (k Keeper) AuctionMapAll(c context.Context, req *types.QueryAllAuctionMapRequest) (*types.QueryAllAuctionMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var auctionMaps []*types.AuctionMap
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	auctionMapStore := prefix.NewStore(store, types.KeyPrefix(types.AuctionMapKey))

	pageRes, err := query.Paginate(auctionMapStore, req.Pagination, func(key []byte, value []byte) error {
		var auctionMap types.AuctionMap
		if err := k.cdc.UnmarshalBinaryBare(value, &auctionMap); err != nil {
			return err
		}

		auctionMaps = append(auctionMaps, &auctionMap)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAuctionMapResponse{AuctionMap: auctionMaps, Pagination: pageRes}, nil
}

func (k Keeper) AuctionMap(c context.Context, req *types.QueryGetAuctionMapRequest) (*types.QueryGetAuctionMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAuctionMap(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetAuctionMapResponse{AuctionMap: &val}, nil
}
