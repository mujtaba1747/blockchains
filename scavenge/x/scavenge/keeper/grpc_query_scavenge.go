package keeper

import (
	"context"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ScavengeAll(c context.Context, req *types.QueryAllScavengeRequest) (*types.QueryAllScavengeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var scavenges []*types.Scavenge
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	scavengeStore := prefix.NewStore(store, types.KeyPrefix(types.ScavengeKey))

	pageRes, err := query.Paginate(scavengeStore, req.Pagination, func(key []byte, value []byte) error {
		var scavenge types.Scavenge
		if err := k.cdc.UnmarshalBinaryBare(value, &scavenge); err != nil {
			return err
		}

		scavenges = append(scavenges, &scavenge)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllScavengeResponse{Scavenge: scavenges, Pagination: pageRes}, nil
}

func (k Keeper) Scavenge(c context.Context, req *types.QueryGetScavengeRequest) (*types.QueryGetScavengeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetScavenge(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetScavengeResponse{Scavenge: &val}, nil
}
