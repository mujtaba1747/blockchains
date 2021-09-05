// x/scavenge/keeper/msg_server_submit_scavenge.go
package keeper

import (
	"context"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) SubmitScavenge(goCtx context.Context, msg *types.MsgSubmitScavenge) (*types.MsgSubmitScavengeResponse, error) {
	// get context that contains information about the environment, such as block height
	ctx := sdk.UnwrapSDKContext(goCtx)
	// create a new scavenge from the data in the MsgSubmitScavenge message
	var scavenge = types.Scavenge{
		Index:        msg.SolutionHash,
		Creator:      msg.Creator,
		Description:  msg.Description,
		SolutionHash: msg.SolutionHash,
		Reward:       msg.Reward,
	}
	// try getting a scavenge from the store using the solution hash as the key
	_, isFound := k.GetScavenge(ctx, scavenge.SolutionHash)
	// return an error if a scavenge already exists in the store
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Scavenge with that solution hash already exists")
	}
	// get address of the Scavenge module account
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	// convert the message creator address from a string into sdk.AccAddress
	scavenger, err := sdk.AccAddressFromBech32(scavenge.Creator)
	if err != nil {
		panic(err)
	}
	// convert tokens from string into sdk.Coins
	reward, err := sdk.ParseCoinsNormalized(scavenge.Reward)
	if err != nil {
		panic(err)
	}
	// send tokens from the scavenge creator to the module account
	sdkError := k.bankKeeper.SendCoins(ctx, scavenger, moduleAcct, reward)
	if sdkError != nil {
		return nil, sdkError
	}
	// write the scavenge to the store
	k.SetScavenge(ctx, scavenge)
	return &types.MsgSubmitScavengeResponse{}, nil
}
