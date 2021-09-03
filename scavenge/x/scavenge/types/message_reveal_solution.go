package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRevealSolution{}

func NewMsgRevealSolution(creator string, solution string) *MsgRevealSolution {
	return &MsgRevealSolution{
		Creator:  creator,
		Solution: solution,
	}
}

func (msg *MsgRevealSolution) Route() string {
	return RouterKey
}

func (msg *MsgRevealSolution) Type() string {
	return "RevealSolution"
}

func (msg *MsgRevealSolution) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRevealSolution) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRevealSolution) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
