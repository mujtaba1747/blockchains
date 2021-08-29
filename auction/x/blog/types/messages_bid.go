// x/blog/types/messages_bid.go
package types

import (
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBid{}

func NewMsgCreateBid(creator, auctionId string, amt int64) *MsgCreateBid {
	return &MsgCreateBid{
		Creator:   creator,
		AuctionId: auctionId,
		Amt:       amt,
	}
}

// Route ...
func (msg MsgCreateBid) Route() string {
	return RouterKey
}

// Type ...
func (msg MsgCreateBid) Type() string {
	return "CreateBid"
}

// GetSigners ...
func (msg *MsgCreateBid) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes ...
func (msg *MsgCreateBid) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic ...
func (msg *MsgCreateBid) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.GetAmt() < 0 {
		return errors.New("Bid amount negative")
	}
	return nil
}
