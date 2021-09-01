package types

const (
	// ModuleName defines the module name
	ModuleName = "candle"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_candle"

	// this line is used by starport scaffolding # ibc/keys/name
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	AuctionMapKey = "AuctionMap-value-"
)

const (
	BidListKey      = "BidList-value-"
	BidListCountKey = "BidList-count-"
)

const (
	ResultsMapKey = "ResultsMap-value-"
)
