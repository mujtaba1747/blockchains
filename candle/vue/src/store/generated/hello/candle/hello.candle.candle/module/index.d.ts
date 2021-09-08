import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateBidMap } from "./types/candle/tx";
import { MsgUpdateBidMap } from "./types/candle/tx";
import { MsgUpdateBidList } from "./types/candle/tx";
import { MsgUpdateResultsMap } from "./types/candle/tx";
import { MsgDeleteBidList } from "./types/candle/tx";
import { MsgCreateAuction } from "./types/candle/tx";
import { MsgDeleteAuctionMap } from "./types/candle/tx";
import { MsgFinalizeAuction } from "./types/candle/tx";
import { MsgCreateResultsMap } from "./types/candle/tx";
import { MsgCreateBidList } from "./types/candle/tx";
import { MsgDeleteResultsMap } from "./types/candle/tx";
import { MsgUpdateAuctionMap } from "./types/candle/tx";
import { MsgDeleteBidMap } from "./types/candle/tx";
import { MsgCreateBid } from "./types/candle/tx";
import { MsgCreateAuctionMap } from "./types/candle/tx";
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
    msgCreateBidMap: (data: MsgCreateBidMap) => EncodeObject;
    msgUpdateBidMap: (data: MsgUpdateBidMap) => EncodeObject;
    msgUpdateBidList: (data: MsgUpdateBidList) => EncodeObject;
    msgUpdateResultsMap: (data: MsgUpdateResultsMap) => EncodeObject;
    msgDeleteBidList: (data: MsgDeleteBidList) => EncodeObject;
    msgCreateAuction: (data: MsgCreateAuction) => EncodeObject;
    msgDeleteAuctionMap: (data: MsgDeleteAuctionMap) => EncodeObject;
    msgFinalizeAuction: (data: MsgFinalizeAuction) => EncodeObject;
    msgCreateResultsMap: (data: MsgCreateResultsMap) => EncodeObject;
    msgCreateBidList: (data: MsgCreateBidList) => EncodeObject;
    msgDeleteResultsMap: (data: MsgDeleteResultsMap) => EncodeObject;
    msgUpdateAuctionMap: (data: MsgUpdateAuctionMap) => EncodeObject;
    msgDeleteBidMap: (data: MsgDeleteBidMap) => EncodeObject;
    msgCreateBid: (data: MsgCreateBid) => EncodeObject;
    msgCreateAuctionMap: (data: MsgCreateAuctionMap) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
