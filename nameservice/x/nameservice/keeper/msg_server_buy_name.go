package keeper

import (
	"context"
	"strconv"

	"github.com/cosmonaut/nameservice/x/nameservice/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) BuyName(goCtx context.Context, msg *types.MsgBuyName) (*types.MsgBuyNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	whois, isFound := k.GetWhois(ctx, msg.Name)

	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "buy-name failed: name doesn't exist in store, create it using create-name")
	}

	if whois.Creator != "" {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "buy-name failed: name already owned")
	}

	minPrice := sdk.Coins{sdk.NewInt64Coin("token", 10)}

	minFromGenesis := types.Params{MinPrice: 0}
	// k.Keeper.ParamSubspace.GetIfExists(ctx, []byte("min-price"), &minFromGenesis)

	k.Keeper.ParamSubspace.GetParamSet(ctx, &minFromGenesis)

	if minFromGenesis.MinPrice > 0 {
		minPrice = sdk.Coins{sdk.NewInt64Coin("token", minFromGenesis.MinPrice)}
	}

	bid, err := sdk.ParseCoinsNormalized(msg.Bid)

	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, err.Error())
	}

	if minPrice.IsAllGT(bid) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "buy-name failed: bid is less than min amount")
	}

	buyer, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, err.Error())
	}

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	// Sending Coin to Module Account
	sdkError := k.bankKeeper.SendCoins(ctx, buyer, moduleAcct, bid)
	// k.bankKeeper.SendCoinsFromAccountToModule()
	if sdkError != nil {
		return nil, sdkError
	}

	// Persisting to Store
	newWhois := types.Whois{
		Index:    whois.Index,
		Name:     whois.Name,
		Creator:  msg.Creator,
		Price:    msg.Bid,
		CreateHt: strconv.FormatInt(ctx.BlockHeight(), 10),
	}
	k.SetWhois(ctx, newWhois)

	return &types.MsgBuyNameResponse{}, nil
}
