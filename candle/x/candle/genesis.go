package candle

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hello/candle/x/candle/keeper"
	"github.com/hello/candle/x/candle/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the resultsMap
	for _, elem := range genState.ResultsMapList {
		k.SetResultsMap(ctx, *elem)
	}

	// Set all the bidList
	for _, elem := range genState.BidListList {
		k.SetBidList(ctx, *elem)
	}

	// Set bidList count
	k.SetBidListCount(ctx, genState.BidListCount)

	// Set all the auctionMap
	for _, elem := range genState.AuctionMapList {
		k.SetAuctionMap(ctx, *elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all resultsMap
	resultsMapList := k.GetAllResultsMap(ctx)
	for _, elem := range resultsMapList {
		elem := elem
		genesis.ResultsMapList = append(genesis.ResultsMapList, &elem)
	}

	// Get all bidList
	bidListList := k.GetAllBidList(ctx)
	for _, elem := range bidListList {
		elem := elem
		genesis.BidListList = append(genesis.BidListList, &elem)
	}

	// Set the current count
	genesis.BidListCount = k.GetBidListCount(ctx)

	// Get all auctionMap
	auctionMapList := k.GetAllAuctionMap(ctx)
	for _, elem := range auctionMapList {
		elem := elem
		genesis.AuctionMapList = append(genesis.AuctionMapList, &elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
