// x/blog/types/messages_bid.go
package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgFinalizeAuction{}

func NewMsgFinalizeAuction(creator, auctionId string) *MsgFinalizeAuction {
	return &MsgFinalizeAuction{
		Creator:   creator,
		AuctionId: auctionId,
	}
}

// Route ...
func (msg MsgFinalizeAuction) Route() string {
	return RouterKey
}

// Type ...
func (msg MsgFinalizeAuction) Type() string {
	return "FinalizeAuction"
}

// GetSigners ...
func (msg *MsgFinalizeAuction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes ...
func (msg *MsgFinalizeAuction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic ...
func (msg *MsgFinalizeAuction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
