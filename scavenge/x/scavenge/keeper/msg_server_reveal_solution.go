package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/hex"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) RevealSolution(goCtx context.Context, msg *types.MsgRevealSolution) (*types.MsgRevealSolutionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	// concatenate a solution and a scavenger address and convert it to bytes
	var solutionScavengerBytes = []byte(msg.Solution + msg.Creator)
	// find the hash of solution and address
	var solutionScavengerHash = sha256.Sum256(solutionScavengerBytes)
	// convert the hash to a string
	var solutionScavengerHashString = hex.EncodeToString(solutionScavengerHash[:])
	// try getting a commit using the the hash of solution and address
	_, isFound := k.GetCommit(ctx, solutionScavengerHashString)
	// return an error if a commit doesn't exist
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Commit with that hash doesn't exists")
	}
	// find a hash of the solution
	var solutionHash = sha256.Sum256([]byte(msg.Solution))
	// encode the solution hash to string
	var solutionHashString = hex.EncodeToString(solutionHash[:])
	var scavenge types.Scavenge
	// get a scavenge from the stre using the solution hash
	scavenge, isFound = k.GetScavenge(ctx, solutionHashString)
	// return an error if the solution doesn't exist
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Scavenge with that solution hash doesn't exists")
	}
	// check that the scavenger property contains a valid address
	_, err := sdk.AccAddressFromBech32(scavenge.Scavenger)
	// return an error if a scavenge has already been solved
	if err == nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Scavenge has already been solved")
	}
	// save the scavebger address to the scavenge
	scavenge.Scavenger = msg.Creator
	// save the correct solution to the scavenge
	scavenge.Solution = msg.Solution
	// get address of the module account
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	// convert scavenger address from string to sdk.AccAddress
	scavenger, err := sdk.AccAddressFromBech32(scavenge.Scavenger)
	if err != nil {
		panic(err)
	}
	// parse tokens from a string to sdk.Coins
	reward, err := sdk.ParseCoinsNormalized(scavenge.Reward)
	if err != nil {
		panic(err)
	}
	// send tokens from a module account to the scavenger
	sdkError := k.bankKeeper.SendCoins(ctx, moduleAcct, scavenger, reward)
	if sdkError != nil {
		return nil, sdkError
	}
	// save the udpated scavenge to the store
	k.SetScavenge(ctx, scavenge)
	return &types.MsgRevealSolutionResponse{}, nil
}
