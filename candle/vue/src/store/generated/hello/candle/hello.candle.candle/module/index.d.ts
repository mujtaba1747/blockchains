import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteResultsMap } from "./types/candle/tx";
import { MsgCreateAuction } from "./types/candle/tx";
import { MsgUpdateBidMap } from "./types/candle/tx";
import { MsgUpdateResultsMap } from "./types/candle/tx";
import { MsgUpdateAuctionMap } from "./types/candle/tx";
import { MsgDeleteBidMap } from "./types/candle/tx";
import { MsgFinalizeAuction } from "./types/candle/tx";
import { MsgDeleteAuctionMap } from "./types/candle/tx";
import { MsgCreateBidMap } from "./types/candle/tx";
import { MsgCreateBid } from "./types/candle/tx";
import { MsgUpdateBidList } from "./types/candle/tx";
import { MsgCreateAuctionMap } from "./types/candle/tx";
import { MsgCreateBidList } from "./types/candle/tx";
import { MsgDeleteBidList } from "./types/candle/tx";
import { MsgCreateResultsMap } from "./types/candle/tx";
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
    msgDeleteResultsMap: (data: MsgDeleteResultsMap) => EncodeObject;
    msgCreateAuction: (data: MsgCreateAuction) => EncodeObject;
    msgUpdateBidMap: (data: MsgUpdateBidMap) => EncodeObject;
    msgUpdateResultsMap: (data: MsgUpdateResultsMap) => EncodeObject;
    msgUpdateAuctionMap: (data: MsgUpdateAuctionMap) => EncodeObject;
    msgDeleteBidMap: (data: MsgDeleteBidMap) => EncodeObject;
    msgFinalizeAuction: (data: MsgFinalizeAuction) => EncodeObject;
    msgDeleteAuctionMap: (data: MsgDeleteAuctionMap) => EncodeObject;
    msgCreateBidMap: (data: MsgCreateBidMap) => EncodeObject;
    msgCreateBid: (data: MsgCreateBid) => EncodeObject;
    msgUpdateBidList: (data: MsgUpdateBidList) => EncodeObject;
    msgCreateAuctionMap: (data: MsgCreateAuctionMap) => EncodeObject;
    msgCreateBidList: (data: MsgCreateBidList) => EncodeObject;
    msgDeleteBidList: (data: MsgDeleteBidList) => EncodeObject;
    msgCreateResultsMap: (data: MsgCreateResultsMap) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
