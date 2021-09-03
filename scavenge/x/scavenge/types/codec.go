package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgRevealSolution{}, "scavenge/RevealSolution", nil)

	cdc.RegisterConcrete(&MsgCommitSolution{}, "scavenge/CommitSolution", nil)

	cdc.RegisterConcrete(&MsgSubmitScavenge{}, "scavenge/SubmitScavenge", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRevealSolution{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCommitSolution{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSubmitScavenge{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
