package keeper

import (
	"github.com/hello/candle/x/candle/types"
)

var _ types.QueryServer = Keeper{}
