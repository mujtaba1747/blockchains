package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/hello/candle/x/candle/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1
	cmd.AddCommand(CmdCreateBidMap())
	cmd.AddCommand(CmdUpdateBidMap())
	cmd.AddCommand(CmdDeleteBidMap())

	cmd.AddCommand(CmdCreateResultsMap())
	cmd.AddCommand(CmdUpdateResultsMap())
	cmd.AddCommand(CmdDeleteResultsMap())

	cmd.AddCommand(CmdCreateBidList())
	cmd.AddCommand(CmdUpdateBidList())
	cmd.AddCommand(CmdDeleteBidList())

	cmd.AddCommand(CmdCreateAuctionMap())
	cmd.AddCommand(CmdUpdateAuctionMap())
	cmd.AddCommand(CmdDeleteAuctionMap())

	cmd.AddCommand(CmdFinalizeAuction())

	cmd.AddCommand(CmdCreateBid())

	cmd.AddCommand(CmdCreateAuction())

	return cmd
}
