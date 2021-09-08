package keeper

import (
	"fmt"
	"math/rand"
	"testing"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
)

func TestCreateBid(t *testing.T) {
	testSuite := &TestSuite{}

	// TODO: There must be a better way to do this
	testSuite.SetT(t)
	testSuite.SetupTest()
	testSuite.TestCreateSingleBidAtBeginning()
	testSuite.SetupTest()
	testSuite.TestCreateBidAfterAuctionExpiry()
	testSuite.SetupTest()
	testSuite.TestCreateBidAtRandomHeight()
	testSuite.SetupTest()
}

// Make sure to pass appropriate BlockHeight in suite.Ctx
func (suite *TestSuite) CreateBidHelper(auctionId string, amt uint64, creator string) error {

	srv := NewMsgServerImpl(*suite.Keeper)

	// Asserting if the auction is actually exists
	_, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, auctionId)
	if !isFound {
		return fmt.Errorf("no auction with ID: %s found", auctionId)
	}

	msgCreateBid := &types.MsgCreateBid{
		Creator:   creator,
		AuctionId: auctionId,
		Amt:       amt,
	}

	wctx := sdk.WrapSDKContext(suite.Ctx)
	_, err := srv.CreateBid(wctx, msgCreateBid)
	return err
}

func (suite *TestSuite) TestCreateSingleBidAtBeginning() {
	rand.Seed(time.Now().UnixNano())

	require := suite.Require()

	auctionTitle := "foo"
	err := suite.CreateAuctionHelper(auctionTitle)
	require.NoError(err)

	auction, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, auctionTitle)
	require.True(isFound)

	bidCreator := "bob"
	bidAmt := rand.Uint64()
	ctxBackUp := suite.Ctx
	// Setting ctx blockheight to auction start
	suite.Ctx = suite.Ctx.WithBlockHeight(int64(auction.BlockHeight))
	err = suite.CreateBidHelper(auction.Index, bidAmt, bidCreator)
	require.NoError(err)

	// Asserting that the bid was actually created
	bidIdx := GetBidMapIdx(suite.Ctx, auction.Index, bidCreator, bidAmt)
	_, isFound = suite.Keeper.GetBidMap(suite.Ctx, bidIdx)
	require.True(isFound)

	suite.Ctx = ctxBackUp
}

func (suite *TestSuite) TestCreateBidAfterAuctionExpiry() {
	rand.Seed(time.Now().UnixNano())

	require := suite.Require()

	auctionTitle := "foo"
	err := suite.CreateAuctionHelper(auctionTitle)
	require.NoError(err)

	auction, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, auctionTitle)
	require.True(isFound)

	bidCreator := "bob"
	bidAmt := rand.Uint64()
	ctxBackUp := suite.Ctx
	// Setting ctx blockheight to height of auction end
	suite.Ctx = suite.Ctx.WithBlockHeight(int64(auction.BlockHeight) + int64(auction.Deadline))
	err = suite.CreateBidHelper(auction.Index, bidAmt, bidCreator)
	require.Error(err)

	// Asserting that the bid was actually created
	bidIdx := GetBidMapIdx(suite.Ctx, auction.Index, bidCreator, bidAmt)
	_, isFound = suite.Keeper.GetBidMap(suite.Ctx, bidIdx)
	require.False(isFound)

	suite.Ctx = ctxBackUp
}

// Creates a bid at any valid blockheight: [auction Start Height, auction Start Height + Deadline)
func (suite *TestSuite) TestCreateBidAtRandomHeight() {
	rand.Seed(time.Now().UnixNano())

	require := suite.Require()

	auctionTitle := "foo"
	err := suite.CreateAuctionHelper(auctionTitle)
	require.NoError(err)

	auction, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, auctionTitle)
	require.True(isFound)

	bidCreator := "bob"
	bidAmt := rand.Uint64()
	ctxBackUp := suite.Ctx
	// Setting ctx blockheight to random valid blockheight
	suite.Ctx = suite.Ctx.WithBlockHeight(
		rand.Int63n(int64(auction.BlockHeight) + rand.Int63n(int64(auction.Deadline))),
	)
	err = suite.CreateBidHelper(auction.Index, bidAmt, bidCreator)
	require.NoError(err)

	// Asserting that the bid was actually created
	bidIdx := GetBidMapIdx(suite.Ctx, auction.Index, bidCreator, bidAmt)
	_, isFound = suite.Keeper.GetBidMap(suite.Ctx, bidIdx)
	require.True(isFound)

	suite.Ctx = ctxBackUp
}
