package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateResultsMap{}, "candle/CreateResultsMap", nil)
	cdc.RegisterConcrete(&MsgUpdateResultsMap{}, "candle/UpdateResultsMap", nil)
	cdc.RegisterConcrete(&MsgDeleteResultsMap{}, "candle/DeleteResultsMap", nil)

	cdc.RegisterConcrete(&MsgCreateBidList{}, "candle/CreateBidList", nil)
	cdc.RegisterConcrete(&MsgUpdateBidList{}, "candle/UpdateBidList", nil)
	cdc.RegisterConcrete(&MsgDeleteBidList{}, "candle/DeleteBidList", nil)

	cdc.RegisterConcrete(&MsgCreateAuctionMap{}, "candle/CreateAuctionMap", nil)
	cdc.RegisterConcrete(&MsgUpdateAuctionMap{}, "candle/UpdateAuctionMap", nil)
	cdc.RegisterConcrete(&MsgDeleteAuctionMap{}, "candle/DeleteAuctionMap", nil)

	cdc.RegisterConcrete(&MsgFinalizeAuction{}, "candle/FinalizeAuction", nil)

	cdc.RegisterConcrete(&MsgCreateBid{}, "candle/CreateBid", nil)

	cdc.RegisterConcrete(&MsgCreateAuction{}, "candle/CreateAuction", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateResultsMap{},
		&MsgUpdateResultsMap{},
		&MsgDeleteResultsMap{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBidList{},
		&MsgUpdateBidList{},
		&MsgDeleteBidList{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAuctionMap{},
		&MsgUpdateAuctionMap{},
		&MsgDeleteAuctionMap{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgFinalizeAuction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBid{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAuction{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
