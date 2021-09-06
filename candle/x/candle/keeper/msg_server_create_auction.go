package keeper

import (
	"context"
	"encoding/binary"
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/hello/candle/x/candle/types"
)

func (k msgServer) CreateAuction(goCtx context.Context, msg *types.MsgCreateAuction) (*types.MsgCreateAuctionResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	prevHash := ctx.BlockHeader().LastBlockId.Hash
	seed := binary.BigEndian.Uint64(prevHash[:8])

	rand.Seed(int64(seed))

	// TODO: Handling the message
	var auction = types.AuctionMap{
		Creator:     msg.Creator,
		Index:       msg.Title,
		BlockHeight: uint64(ctx.BlockHeight()),
		Deadline:    uint64(20 + rand.Int31n(60)),
	}

	if _, isFound := k.GetAuctionMap(ctx, auction.Index); isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Auction with same title already exists")
	}

	k.SetAuctionMap(ctx, auction)

	ctx.Logger().Info("Auction", auction.Index, "deadline = ", auction.Deadline)

	return &types.MsgCreateAuctionResponse{}, nil
}
