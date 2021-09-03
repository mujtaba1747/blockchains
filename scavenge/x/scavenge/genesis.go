package scavenge

import (
	"github.com/cosmonaut/scavenge/x/scavenge/keeper"
	"github.com/cosmonaut/scavenge/x/scavenge/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the commit
	for _, elem := range genState.CommitList {
		k.SetCommit(ctx, *elem)
	}

	// Set all the scavenge
	for _, elem := range genState.ScavengeList {
		k.SetScavenge(ctx, *elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all commit
	commitList := k.GetAllCommit(ctx)
	for _, elem := range commitList {
		elem := elem
		genesis.CommitList = append(genesis.CommitList, &elem)
	}

	// Get all scavenge
	scavengeList := k.GetAllScavenge(ctx)
	for _, elem := range scavengeList {
		elem := elem
		genesis.ScavengeList = append(genesis.ScavengeList, &elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
