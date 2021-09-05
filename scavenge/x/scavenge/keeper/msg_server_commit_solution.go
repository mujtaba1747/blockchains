package keeper

import (
	"context"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CommitSolution(goCtx context.Context, msg *types.MsgCommitSolution) (*types.MsgCommitSolutionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	// create a new commit from the information in the MsgCommitSolution message
	var commit = types.Commit{
		Index:                 msg.SolutionScavengerHash,
		Creator:               msg.Creator,
		SolutionHash:          msg.SolutionHash,
		SolutionScavengerHash: msg.SolutionScavengerHash,
	}
	// try getting a commit from the store using the solution+scavenger hash as the key
	_, isFound := k.GetCommit(ctx, commit.SolutionScavengerHash)
	// return an error if a commit already exists in the store
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Commit with that hash already exists")
	}
	// write commit to the store
	k.SetCommit(ctx, commit)
	return &types.MsgCommitSolutionResponse{}, nil
}
