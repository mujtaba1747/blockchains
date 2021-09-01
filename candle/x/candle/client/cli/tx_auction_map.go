package cli

import (
	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/hello/candle/x/candle/types"
)

func CmdCreateAuctionMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-auction-map [index] [blockHeight] [deadline]",
		Short: "Create a new auctionMap",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]
			argsBlockHeight, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argsDeadline, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAuctionMap(clientCtx.GetFromAddress().String(), index, argsBlockHeight, argsDeadline)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateAuctionMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-auction-map [index] [blockHeight] [deadline]",
		Short: "Update a auctionMap",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			argsBlockHeight, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argsDeadline, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateAuctionMap(clientCtx.GetFromAddress().String(), index, argsBlockHeight, argsDeadline)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteAuctionMap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-auction-map [index]",
		Short: "Delete a auctionMap",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			index := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteAuctionMap(clientCtx.GetFromAddress().String(), index)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
