import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetName } from "./types/nameservice/tx";
import { MsgDeleteName } from "./types/nameservice/tx";
import { MsgCreateName } from "./types/nameservice/tx";
import { MsgBuyName } from "./types/nameservice/tx";
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
    msgSetName: (data: MsgSetName) => EncodeObject;
    msgDeleteName: (data: MsgDeleteName) => EncodeObject;
    msgCreateName: (data: MsgCreateName) => EncodeObject;
    msgBuyName: (data: MsgBuyName) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
