package keeper

import (
	"context"
	"encoding/binary"
	"fmt"
	"math/rand"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/hello/candle/x/candle/types"
)

func (k msgServer) FinalizeAuction(goCtx context.Context, msg *types.MsgFinalizeAuction) (*types.MsgFinalizeAuctionResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	result := types.ResultsMap{
		Creator: msg.Creator,
		Index:   msg.AuctionId,
	}

	// TODO: Handling the message
	var auction types.AuctionMap
	var isFound bool

	if auction, isFound = k.GetAuctionMap(ctx, result.Index); !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "No such Auction Title found")
	}

	if _, isFound = k.GetResultsMap(ctx, result.Index); isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Auction already finalized")
	}

	auctionEndHeight := (auction.BlockHeight + auction.Deadline)

	if uint64(ctx.BlockHeight()) < auctionEndHeight {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest,
			fmt.Sprintf(
				"Auction not ended, try again after %d blocks",
				auctionEndHeight-uint64(ctx.BlockHeight())),
		)
	}

	prevHash := ctx.BlockHeader().LastBlockId.Hash
	seed := binary.BigEndian.Uint64(prevHash[:8])
	rand.Seed(int64(seed))

	startHeight := auction.BlockHeight
	endHeight := startHeight + uint64(10+rand.Int63n(int64(auction.Deadline-10)))
	ctx.Logger().Info(
		"Finalize Auction Start : " + strconv.FormatUint(startHeight, 10) + " End : " +
			strconv.FormatUint(endHeight, 10),
	)
	var amt = uint64(0)

	// This is inefficient
	allBids := k.GetAllBidMap(ctx)
	for _, b := range allBids {
		if b.BlockHeight >= int64(startHeight) && b.BlockHeight <= int64(endHeight) && amt < b.Amt {
			amt = b.Amt
			result.Winner = b.Creator
			result.BidId = b.Index
		}
	}

	k.SetResultsMap(ctx, result)

	return &types.MsgFinalizeAuctionResponse{}, nil
}
