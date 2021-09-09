import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateResultsMap } from "./types/candle/tx";
import { MsgDeleteBidList } from "./types/candle/tx";
import { MsgDeleteBidMap } from "./types/candle/tx";
import { MsgUpdateBidList } from "./types/candle/tx";
import { MsgCreateAuctionMap } from "./types/candle/tx";
import { MsgCreateBid } from "./types/candle/tx";
import { MsgCreateResultsMap } from "./types/candle/tx";
import { MsgUpdateAuctionMap } from "./types/candle/tx";
import { MsgCreateAuction } from "./types/candle/tx";
import { MsgCreateBidMap } from "./types/candle/tx";
import { MsgUpdateBidMap } from "./types/candle/tx";
import { MsgDeleteResultsMap } from "./types/candle/tx";
import { MsgDeleteAuctionMap } from "./types/candle/tx";
import { MsgFinalizeAuction } from "./types/candle/tx";
import { MsgCreateBidList } from "./types/candle/tx";
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
    msgUpdateResultsMap: (data: MsgUpdateResultsMap) => EncodeObject;
    msgDeleteBidList: (data: MsgDeleteBidList) => EncodeObject;
    msgDeleteBidMap: (data: MsgDeleteBidMap) => EncodeObject;
    msgUpdateBidList: (data: MsgUpdateBidList) => EncodeObject;
    msgCreateAuctionMap: (data: MsgCreateAuctionMap) => EncodeObject;
    msgCreateBid: (data: MsgCreateBid) => EncodeObject;
    msgCreateResultsMap: (data: MsgCreateResultsMap) => EncodeObject;
    msgUpdateAuctionMap: (data: MsgUpdateAuctionMap) => EncodeObject;
    msgCreateAuction: (data: MsgCreateAuction) => EncodeObject;
    msgCreateBidMap: (data: MsgCreateBidMap) => EncodeObject;
    msgUpdateBidMap: (data: MsgUpdateBidMap) => EncodeObject;
    msgDeleteResultsMap: (data: MsgDeleteResultsMap) => EncodeObject;
    msgDeleteAuctionMap: (data: MsgDeleteAuctionMap) => EncodeObject;
    msgFinalizeAuction: (data: MsgFinalizeAuction) => EncodeObject;
    msgCreateBidList: (data: MsgCreateBidList) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
