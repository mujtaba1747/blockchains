package keeper

import (
	"fmt"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
)

func TestAuction(t *testing.T) {
	testSuite := &TestSuite{}

	// TODO: There must be a better way to do this
	testSuite.SetT(t)
	testSuite.SetupTest()
	testSuite.TestCompleteAuction()
	testSuite.SetupTest()
}

// Creates a bid at the blockheight present in suite.Ctx
func (suite *TestSuite) CreateBidAtHeightHelper(auction types.AuctionMap, bidAmt uint64, bidCreator string) error {

	_, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, auction.Index)
	if !isFound {
		return fmt.Errorf("auction not found")
	}

	err := suite.CreateBidHelper(auction.Index, bidAmt, bidCreator)
	if err != nil {
		return err
	}

	// Asserting that the bid was actually created
	bidIdx := GetBidMapIdx(suite.Ctx, auction.Index, bidCreator, bidAmt)
	_, isFound = suite.Keeper.GetBidMap(suite.Ctx, bidIdx)
	if !isFound {
		return fmt.Errorf("create bid failed")
	}

	return nil
}

func (suite *TestSuite) TestCompleteAuction() {
	auctionTitle := "foo"

	require := suite.Require()

	err := suite.CreateAuctionHelper(auctionTitle)
	require.NoError(err)

	// Asserting if the auction is actually created
	auction, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, auctionTitle)
	require.True(isFound)

	beginHeight := auction.BlockHeight
	expiryHeight := beginHeight + auction.Deadline

	// Adding 2 Bids: One at the beginning and other at the very end
	// The Bid at the Beginning is lower but will win, if other end is outside window
	// After finalize we have 2 cases: end = expiry - 1 and end < expiry - 1
	// Bids are not allowed at height=expiry

	ctxBackup := suite.Ctx

	suite.Ctx = suite.Ctx.WithBlockHeight(int64(beginHeight))
	err = suite.CreateBidAtHeightHelper(auction, 10, "alice")
	require.NoError(err)

	suite.Ctx = suite.Ctx.WithBlockHeight(int64(expiryHeight) - 1)
	err = suite.CreateBidAtHeightHelper(auction, 20, "bob")
	require.NoError(err)

	suite.Ctx = ctxBackup

	// Finalzing the auction
	blockHeader, err := randomBlockHeader()
	require.NoError(err)

	ctx := ctxBackup.WithBlockHeader(blockHeader).WithBlockHeight(int64(expiryHeight))
	wctx := sdk.WrapSDKContext(ctx)

	srv := NewMsgServerImpl(*suite.Keeper)
	_, err = srv.FinalizeAuction(
		wctx,
		&types.MsgFinalizeAuction{
			Creator:   "xyz", // Doesn't matter who finalizes the auction
			AuctionId: auctionTitle,
		},
	)
	require.NoError(err)

	// Asserting that the auction actually got finalized
	result, isFound := suite.Keeper.GetResultsMap(suite.Ctx, auctionTitle)
	require.True(isFound)

	// End Height is the height of the last block on which a bid can be created
	endHeight := result.EndHeight

	if endHeight == int64(expiryHeight)-1 {
		// bob wins!
		require.Equal(result.Winner, "bob")
	} else {
		// alice wins!
		require.Equal(result.Winner, "alice")
	}

	suite.Ctx = ctxBackup
}
