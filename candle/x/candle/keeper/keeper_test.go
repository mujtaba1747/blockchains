package keeper

import (
	"testing"

	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/simapp"
	"github.com/cosmos/cosmos-sdk/store"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/types"
	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
	"github.com/tendermint/tendermint/libs/log"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	tmdb "github.com/tendermint/tm-db"
)

func setupKeeper(t testing.TB) (*Keeper, sdk.Context) {
	storeKey := sdk.NewKVStoreKey(types.StoreKey)
	memStoreKey := storetypes.NewMemoryStoreKey(types.MemStoreKey)

	db := tmdb.NewMemDB()
	stateStore := store.NewCommitMultiStore(db)
	stateStore.MountStoreWithDB(storeKey, sdk.StoreTypeIAVL, db)
	stateStore.MountStoreWithDB(memStoreKey, sdk.StoreTypeMemory, nil)
	require.NoError(t, stateStore.LoadLatestVersion())

	registry := codectypes.NewInterfaceRegistry()
	keeper := NewKeeper(
		codec.NewProtoCodec(registry),
		storeKey,
		memStoreKey,
	)

	ctx := sdk.NewContext(stateStore, tmproto.Header{}, false, log.NewNopLogger())
	return keeper, ctx
}

type TestSuite struct {
	suite.Suite

	App    *simapp.SimApp
	Ctx    sdk.Context
	Keeper *Keeper
	Cdc    *codec.LegacyAmino
}

func (suite *TestSuite) SetupTest() {
	suite.App = simapp.Setup(false)
	suite.Cdc = suite.App.LegacyAmino()
	suite.Keeper, suite.Ctx = setupKeeper(suite.Suite.T())
}

// TODO: Remove this

// func (suite *TestSuite) TestFun() {
// 	suite.T().Log(suite.App.LastCommitID().String())
// 	suite.T().Fail()
// }

// func TestFunc(t *testing.T) {
// 	x := &TestSuite{}
// 	suite.Run(t, x)
// }
