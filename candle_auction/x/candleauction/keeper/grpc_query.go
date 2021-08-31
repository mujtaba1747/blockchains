package keeper

import (
	"github.com/cosmonaut/candle_auction/x/candleauction/types"
)

var _ types.QueryServer = Keeper{}
