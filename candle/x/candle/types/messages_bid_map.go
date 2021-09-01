package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBidMap{}

func NewMsgCreateBidMap(creator string, index string, auctionId string, amt uint64, blockHeight int64) *MsgCreateBidMap {
	return &MsgCreateBidMap{
		Creator:     creator,
		Index:       index,
		AuctionId:   auctionId,
		Amt:         amt,
		BlockHeight: blockHeight,
	}
}

func (msg *MsgCreateBidMap) Route() string {
	return RouterKey
}

func (msg *MsgCreateBidMap) Type() string {
	return "CreateBidMap"
}

func (msg *MsgCreateBidMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBidMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBidMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBidMap{}

func NewMsgUpdateBidMap(creator string, index string, auctionId string, amt uint64, blockHeight int64) *MsgUpdateBidMap {
	return &MsgUpdateBidMap{
		Creator:     creator,
		Index:       index,
		AuctionId:   auctionId,
		Amt:         amt,
		BlockHeight: blockHeight,
	}
}

func (msg *MsgUpdateBidMap) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBidMap) Type() string {
	return "UpdateBidMap"
}

func (msg *MsgUpdateBidMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBidMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBidMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBidMap{}

func NewMsgDeleteBidMap(creator string, index string) *MsgDeleteBidMap {
	return &MsgDeleteBidMap{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteBidMap) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBidMap) Type() string {
	return "DeleteBidMap"
}

func (msg *MsgDeleteBidMap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBidMap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBidMap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
