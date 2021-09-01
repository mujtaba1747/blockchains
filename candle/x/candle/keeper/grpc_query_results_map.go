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

func (k Keeper) ResultsMapAll(c context.Context, req *types.QueryAllResultsMapRequest) (*types.QueryAllResultsMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var resultsMaps []*types.ResultsMap
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	resultsMapStore := prefix.NewStore(store, types.KeyPrefix(types.ResultsMapKey))

	pageRes, err := query.Paginate(resultsMapStore, req.Pagination, func(key []byte, value []byte) error {
		var resultsMap types.ResultsMap
		if err := k.cdc.UnmarshalBinaryBare(value, &resultsMap); err != nil {
			return err
		}

		resultsMaps = append(resultsMaps, &resultsMap)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllResultsMapResponse{ResultsMap: resultsMaps, Pagination: pageRes}, nil
}

func (k Keeper) ResultsMap(c context.Context, req *types.QueryGetResultsMapRequest) (*types.QueryGetResultsMapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetResultsMap(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetResultsMapResponse{ResultsMap: &val}, nil
}
