package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/base64"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/hello/candle/x/candle/types"
)

func (k msgServer) CreateBid(goCtx context.Context, msg *types.MsgCreateBid) (*types.MsgCreateBidResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Used hashing to have unique bids in map
	indexHash := sha256.Sum256(
		[]byte((strconv.FormatInt(ctx.BlockHeight(), 10)) +
			msg.AuctionId +
			msg.Creator +
			strconv.FormatUint(msg.Amt, 10)),
	)

	indexStr := base64.StdEncoding.EncodeToString(indexHash[:])

	// TODO: Handling the message
	bid := types.BidMap{
		Creator:     msg.Creator,
		Index:       indexStr,
		AuctionId:   msg.AuctionId,
		Amt:         msg.Amt,
		BlockHeight: ctx.BlockHeight(),
	}

	var auction types.AuctionMap
	var isFound bool

	if auction, isFound = k.GetAuctionMap(ctx, bid.AuctionId); !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No such Auction Title found")
	}

	auctionEndHeight := (auction.BlockHeight + auction.Deadline)

	if uint64(ctx.BlockHeight()) >= auctionEndHeight {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Auction ended")
	}

	k.SetBidMap(ctx, bid)

	return &types.MsgCreateBidResponse{}, nil
}
