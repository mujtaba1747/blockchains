package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAuctionMap{}

func NewMsgCreateAuctionMap(creator string, index string, blockHeight string, deadline string) *MsgCreateAuctionMap {
	return &MsgCreateAuctionMap{
		Creator:     creator,
		Index:       index,
		BlockHeight: blockHeight,
		Deadline:    deadline,
	}
}

func (msg *MsgCreateAuctionMap) Route() string {
	return RouterKey
}

func (msg *MsgCreateAuctionMap) Type() string {
	return "CreateAuctionMap"
}

func (msg *MsgCreateAuctionMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAuctionMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAuctionMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAuctionMap{}

func NewMsgUpdateAuctionMap(creator string, index string, blockHeight string, deadline string) *MsgUpdateAuctionMap {
	return &MsgUpdateAuctionMap{
		Creator:     creator,
		Index:       index,
		BlockHeight: blockHeight,
		Deadline:    deadline,
	}
}

func (msg *MsgUpdateAuctionMap) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAuctionMap) Type() string {
	return "UpdateAuctionMap"
}

func (msg *MsgUpdateAuctionMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAuctionMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAuctionMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteAuctionMap{}

func NewMsgDeleteAuctionMap(creator string, index string) *MsgDeleteAuctionMap {
	return &MsgDeleteAuctionMap{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteAuctionMap) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAuctionMap) Type() string {
	return "DeleteAuctionMap"
}

func (msg *MsgDeleteAuctionMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAuctionMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAuctionMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
