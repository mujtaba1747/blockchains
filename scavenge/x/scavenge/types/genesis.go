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
		CommitList:   []*Commit{},
		ScavengeList: []*Scavenge{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated index in commit
	commitIndexMap := make(map[string]bool)

	for _, elem := range gs.CommitList {
		if _, ok := commitIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for commit")
		}
		commitIndexMap[elem.Index] = true
	}
	// Check for duplicated index in scavenge
	scavengeIndexMap := make(map[string]bool)

	for _, elem := range gs.ScavengeList {
		if _, ok := scavengeIndexMap[elem.Index]; ok {
			return fmt.Errorf("duplicated index for scavenge")
		}
		scavengeIndexMap[elem.Index] = true
	}

	return nil
}
