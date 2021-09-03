package keeper

import (
	"context"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CommitSolution(goCtx context.Context, msg *types.MsgCommitSolution) (*types.MsgCommitSolutionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCommitSolutionResponse{}, nil
}
