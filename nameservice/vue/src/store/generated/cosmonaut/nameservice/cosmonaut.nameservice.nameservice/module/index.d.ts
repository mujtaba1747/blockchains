import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuyName } from "./types/nameservice/tx";
import { MsgSetName } from "./types/nameservice/tx";
import { MsgCreateName } from "./types/nameservice/tx";
import { MsgDeleteName } from "./types/nameservice/tx";
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
    msgBuyName: (data: MsgBuyName) => EncodeObject;
    msgSetName: (data: MsgSetName) => EncodeObject;
    msgCreateName: (data: MsgCreateName) => EncodeObject;
    msgDeleteName: (data: MsgDeleteName) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
