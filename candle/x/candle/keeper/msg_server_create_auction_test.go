package keeper

import (
	"math/rand"
	"testing"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
)

func randomBlockHeader() (tmproto.Header, error) {
	// Preparing a random hash for last block id
	// Prev Hashes used to determine deadline
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
	testSuite.SetT(t)
	testSuite.SetupTest()
	testSuite.TestCreateSingleAuction()
}

// go test -timeout 30s -testify.m '^TestCreateSingleAuction$' github.com/hello/candle/x/candle/keeper

func (suite *TestSuite) TestCreateSingleAuction() {
	require := suite.Require()
	// Probably not a good idea, better not to seed
	rand.Seed(time.Now().UnixNano())

	// keeper, ctx := setupKeeper(t)
	srv := NewMsgServerImpl(*suite.Keeper)

	// Preparing a random hash for last block id
	// Prev Hashes used to determine deadline
	hash := make([]byte, 8)
	_, err := rand.Read(hash)
	require.NoError(err)

	blockHeader, err := randomBlockHeader()
	require.NoError(err)

	suite.Ctx = suite.Ctx.WithBlockHeader(blockHeader)
	wctx := sdk.WrapSDKContext(suite.Ctx)

	creator := "alice"
	createMsg := &types.MsgCreateAuction{
		Creator: creator,
		Title:   "test-0",
	}

	// Creating an auction
	_, err = srv.CreateAuction(wctx, createMsg)
	if err != nil {
		suite.T().Log(err)
	}
	require.NoError(err)

	// Asserting if auction is actually created
	_, isFound := suite.Keeper.GetAuctionMap(suite.Ctx, createMsg.Title)
	require.True(isFound)
}
