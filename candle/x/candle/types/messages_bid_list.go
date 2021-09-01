package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBidList{}

func NewMsgCreateBidList(creator string, auctionId string, amt uint64) *MsgCreateBidList {
	return &MsgCreateBidList{
		Creator:   creator,
		AuctionId: auctionId,
		Amt:       amt,
	}
}

func (msg *MsgCreateBidList) Route() string {
	return RouterKey
}

func (msg *MsgCreateBidList) Type() string {
	return "CreateBidList"
}

func (msg *MsgCreateBidList) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBidList) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBidList) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBidList{}

func NewMsgUpdateBidList(creator string, id uint64, auctionId string, amt uint64) *MsgUpdateBidList {
	return &MsgUpdateBidList{
		Id:        id,
		Creator:   creator,
		AuctionId: auctionId,
		Amt:       amt,
	}
}

func (msg *MsgUpdateBidList) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBidList) Type() string {
	return "UpdateBidList"
}

func (msg *MsgUpdateBidList) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBidList) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBidList) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBidList{}

func NewMsgDeleteBidList(creator string, id uint64) *MsgDeleteBidList {
	return &MsgDeleteBidList{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteBidList) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBidList) Type() string {
	return "DeleteBidList"
}

func (msg *MsgDeleteBidList) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBidList) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBidList) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
