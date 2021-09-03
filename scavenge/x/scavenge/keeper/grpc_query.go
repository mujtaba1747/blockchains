package keeper

import (
	"github.com/cosmonaut/scavenge/x/scavenge/types"
)

var _ types.QueryServer = Keeper{}
