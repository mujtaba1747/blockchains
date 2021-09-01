import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateResultsMap } from "./types/candle/tx";
import { MsgDeleteResultsMap } from "./types/candle/tx";
import { MsgUpdateResultsMap } from "./types/candle/tx";
import { MsgCreateBidList } from "./types/candle/tx";
import { MsgDeleteAuctionMap } from "./types/candle/tx";
import { MsgDeleteBidList } from "./types/candle/tx";
import { MsgCreateBid } from "./types/candle/tx";
import { MsgCreateAuction } from "./types/candle/tx";
import { MsgCreateAuctionMap } from "./types/candle/tx";
import { MsgUpdateBidList } from "./types/candle/tx";
import { MsgUpdateAuctionMap } from "./types/candle/tx";
import { MsgFinalizeAuction } from "./types/candle/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateResultsMap: (data: MsgCreateResultsMap) => EncodeObject;
    msgDeleteResultsMap: (data: MsgDeleteResultsMap) => EncodeObject;
    msgUpdateResultsMap: (data: MsgUpdateResultsMap) => EncodeObject;
    msgCreateBidList: (data: MsgCreateBidList) => EncodeObject;
    msgDeleteAuctionMap: (data: MsgDeleteAuctionMap) => EncodeObject;
    msgDeleteBidList: (data: MsgDeleteBidList) => EncodeObject;
    msgCreateBid: (data: MsgCreateBid) => EncodeObject;
    msgCreateAuction: (data: MsgCreateAuction) => EncodeObject;
    msgCreateAuctionMap: (data: MsgCreateAuctionMap) => EncodeObject;
    msgUpdateBidList: (data: MsgUpdateBidList) => EncodeObject;
    msgUpdateAuctionMap: (data: MsgUpdateAuctionMap) => EncodeObject;
    msgFinalizeAuction: (data: MsgFinalizeAuction) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
