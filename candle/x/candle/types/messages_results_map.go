package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateResultsMap{}

func NewMsgCreateResultsMap(creator string, index string, winner string, bidId uint64) *MsgCreateResultsMap {
	return &MsgCreateResultsMap{
		Creator: creator,
		Index:   index,
		Winner:  winner,
		BidId:   bidId,
	}
}

func (msg *MsgCreateResultsMap) Route() string {
	return RouterKey
}

func (msg *MsgCreateResultsMap) Type() string {
	return "CreateResultsMap"
}

func (msg *MsgCreateResultsMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateResultsMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateResultsMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateResultsMap{}

func NewMsgUpdateResultsMap(creator string, index string, winner string, bidId uint64) *MsgUpdateResultsMap {
	return &MsgUpdateResultsMap{
		Creator: creator,
		Index:   index,
		Winner:  winner,
		BidId:   bidId,
	}
}

func (msg *MsgUpdateResultsMap) Route() string {
	return RouterKey
}

func (msg *MsgUpdateResultsMap) Type() string {
	return "UpdateResultsMap"
}

func (msg *MsgUpdateResultsMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateResultsMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateResultsMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteResultsMap{}

func NewMsgDeleteResultsMap(creator string, index string) *MsgDeleteResultsMap {
	return &MsgDeleteResultsMap{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteResultsMap) Route() string {
	return RouterKey
}

func (msg *MsgDeleteResultsMap) Type() string {
	return "DeleteResultsMap"
}

func (msg *MsgDeleteResultsMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteResultsMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteResultsMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
