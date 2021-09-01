package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		BidMapList:     []*BidMap{},
		ResultsMapList: []*ResultsMap{},
		BidListList:    []*BidList{},
		AuctionMapList: []*AuctionMap{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated index in bidMap
	bidMapIndexMap := make(map[string]bool)

	for _, elem := range gs.BidMapList {
		if _, ok := bidMapIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for bidMap")
		}
		bidMapIndexMap[elem.Index] = true
	}
	// Check for duplicated index in resultsMap
	resultsMapIndexMap := make(map[string]bool)

	for _, elem := range gs.ResultsMapList {
		if _, ok := resultsMapIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for resultsMap")
		}
		resultsMapIndexMap[elem.Index] = true
	}
	// Check for duplicated ID in bidList
	bidListIdMap := make(map[uint64]bool)

	for _, elem := range gs.BidListList {
		if _, ok := bidListIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for bidList")
		}
		bidListIdMap[elem.Id] = true
	}
	// Check for duplicated index in auctionMap
	auctionMapIndexMap := make(map[string]bool)

	for _, elem := range gs.AuctionMapList {
		if _, ok := auctionMapIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for auctionMap")
		}
		auctionMapIndexMap[elem.Index] = true
	}

	return nil
}
