package keeper

import (
	"github.com/cosmonaut/nameservice/x/nameservice/types"
)

var _ types.QueryServer = Keeper{}
