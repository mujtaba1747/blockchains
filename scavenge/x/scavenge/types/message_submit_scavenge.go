package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSubmitScavenge{}

func NewMsgSubmitScavenge(creator string, solutionHash string, description string, reward string) *MsgSubmitScavenge {
	return &MsgSubmitScavenge{
		Creator:      creator,
		SolutionHash: solutionHash,
		Description:  description,
		Reward:       reward,
	}
}

func (msg *MsgSubmitScavenge) Route() string {
	return RouterKey
}

func (msg *MsgSubmitScavenge) Type() string {
	return "SubmitScavenge"
}

func (msg *MsgSubmitScavenge) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubmitScavenge) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubmitScavenge) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
