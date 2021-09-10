package types

import (
	"fmt"

	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
)

const (
	DefaultMinPrice int64 = 1
)

var (
	KeyMinPrice = []byte("minprice")
)

var _ paramtypes.ParamSet = &Params{}

func NewParams(minPrice int64) Params {
	return Params{
		MinPrice: minPrice,
	}
}

func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyMinPrice, &p.MinPrice, validateMinPrice),
	}
}

func DefaultParams() Params {
	return Params{
		MinPrice: DefaultMinPrice,
	}
}

func validateMinPrice(i interface{}) error {
	minPrice, ok := i.(int64)

	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if minPrice <= 0 {
		return fmt.Errorf("imvalid minPrice: price set to non-positive: %d", minPrice)
	}

	return nil
}

func (p Params) Validate() error {
	return validateMinPrice(p.MinPrice)
}
