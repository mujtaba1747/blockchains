package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmonaut/scavenge/x/scavenge/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

var _ = strconv.Itoa(0)

func CmdCommitSolution() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "commit-solution [solutionHash] [solutionScavengerHash]",
		Short: "Broadcast message commit-solution",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsSolutionHash := string(args[0])
			argsSolutionScavengerHash := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCommitSolution(clientCtx.GetFromAddress().String(), string(argsSolutionHash), string(argsSolutionScavengerHash))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
