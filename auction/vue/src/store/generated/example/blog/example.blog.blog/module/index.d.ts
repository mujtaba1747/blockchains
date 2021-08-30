import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateAuction } from "./types/blog/auction";
import { MsgCreateBid } from "./types/blog/auction";
import { MsgFinalizeAuction } from "./types/blog/auction";
import { MsgCreatePost } from "./types/blog/post";
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
    msgCreateAuction: (data: MsgCreateAuction) => EncodeObject;
    msgCreateBid: (data: MsgCreateBid) => EncodeObject;
    msgFinalizeAuction: (data: MsgFinalizeAuction) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
