package keeper

import (
	"math/rand"
	"testing"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
)

// Preparing a random hash for last block id
// Prev Hashes used to determine deadline
func randomBlockHeader() (tmproto.Header, error) {

	hash := make([]byte, 8)
	_, err := rand.Read(hash)

	blockHeader := tmproto.Header{
		LastBlockId: tmproto.BlockID{
			Hash: hash,
		},
	}
	return blockHeader, err
}

func TestCreateSingleAuction(t *testing.T) {
	testSuite := &TestSuite{}

	// TODO: There must be a better way to do this
	testSuite.SetT(t)
	testSuite.SetupTest()
	testSuite.TestCreateSingleAuction()
	testSuite.SetupTest()
	testSuite.TestCreateDuplicateAuction()
	testSuite.SetupTest()
	testSuite.TestMultipleAuction()
	testSuite.SetupTest()
}

// Creates an auction with 'title' and persist's it to keeper of suite
func (suite *TestSuite) CreateAuctionHelper(title string) error {

	// Probably not a good idea, better not to seed with current time
	rand.Seed(time.Now().UnixNano())

	srv := NewMsgServerImpl(*suite.Keeper)

	blockHeader, err := randomBlockHeader()
	if err != nil {
		suite.T().Log(err)
		return err
	}

	suite.Ctx = suite.Ctx.WithBlockHeader(blockHeader)
	wctx := sdk.WrapSDKContext(suite.Ctx)

	createMsg := &types.MsgCreateAuction{
		Creator: "foo",
		Title:   title,
	}

	// Creating an auction
	_, err = srv.CreateAuction(wctx, createMsg)
	if err != nil {
		suite.T().Log(err)
		return err
	}

	return nil
}

func (suite *TestSuite) TestCreateSingleAuction() {

	require := suite.Require()
	err := suite.CreateAuctionHelper("au0")
	require.NoError(err)

	// Asserting if the auction is actually created
	_, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, "au0")
	require.True(isFound)
}

// Auctions are uniquely identified by their 'Title' field
func (suite *TestSuite) TestCreateDuplicateAuction() {

	require := suite.Require()
	err := suite.CreateAuctionHelper("foo")
	require.NoError(err)

	// Asserting if the auction is actually created
	_, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, "foo")
	require.True(isFound)

	// Trying to create the same auction again
	err = suite.CreateAuctionHelper("foo")
	require.Error(err)
}

// This test felt unecessary but more tests never hurt
func (suite *TestSuite) TestMultipleAuction() {
	require := suite.Require()
	auctionTitles := []string{
		"au0",
		"au1",
		"foo",
		"bar",
	}

	for _, title := range auctionTitles {
		err := suite.CreateAuctionHelper(title)
		require.NoError(err)

		// Asserting if the auction is actually created
		_, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, title)
		require.True(isFound)
	}
}
