package cli

import (
	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/hello/candle/x/candle/types"
)

func CmdCreateBidMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-bid-map [index] [auctionId] [amt] [blockHeight]",
		Short: "Create a new bidMap",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]
			argsAuctionId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsAmt, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argsBlockHeight, err := cast.ToInt64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBidMap(clientCtx.GetFromAddress().String(), index, argsAuctionId, argsAmt, argsBlockHeight)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateBidMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-bid-map [index] [auctionId] [amt] [blockHeight]",
		Short: "Update a bidMap",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			argsAuctionId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsAmt, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argsBlockHeight, err := cast.ToInt64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBidMap(clientCtx.GetFromAddress().String(), index, argsAuctionId, argsAmt, argsBlockHeight)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteBidMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-bid-map [index]",
		Short: "Delete a bidMap",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteBidMap(clientCtx.GetFromAddress().String(), index)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
