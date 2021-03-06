// x/blog/types/messages_Auction.go
package types

import (
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAuction{}

func NewMsgCreateAuction(creator string, title string, body string, deadline int64) *MsgCreateAuction {
	return &MsgCreateAuction{
		Creator:  creator,
		Title:    title,
		Body:     body,
		Deadline: deadline,
	}
}

// Route ...
func (msg MsgCreateAuction) Route() string {
	return RouterKey
}

// Type ...
func (msg MsgCreateAuction) Type() string {
	return "CreateAuction"
}

// GetSigners ...
func (msg *MsgCreateAuction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

// GetSignBytes ...
func (msg *MsgCreateAuction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic ...
func (msg *MsgCreateAuction) ValidateBasic() error {
	if msg.Deadline <= 0 {
		return errors.New("Auction can't have non positive deadline")
	}
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
