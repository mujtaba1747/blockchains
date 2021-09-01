// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const types = [
    ["/hello.candle.candle.MsgDeleteResultsMap", MsgDeleteResultsMap],
    ["/hello.candle.candle.MsgCreateAuction", MsgCreateAuction],
    ["/hello.candle.candle.MsgUpdateBidMap", MsgUpdateBidMap],
    ["/hello.candle.candle.MsgUpdateResultsMap", MsgUpdateResultsMap],
    ["/hello.candle.candle.MsgUpdateAuctionMap", MsgUpdateAuctionMap],
    ["/hello.candle.candle.MsgDeleteBidMap", MsgDeleteBidMap],
    ["/hello.candle.candle.MsgFinalizeAuction", MsgFinalizeAuction],
    ["/hello.candle.candle.MsgDeleteAuctionMap", MsgDeleteAuctionMap],
    ["/hello.candle.candle.MsgCreateBidMap", MsgCreateBidMap],
    ["/hello.candle.candle.MsgCreateBid", MsgCreateBid],
    ["/hello.candle.candle.MsgUpdateBidList", MsgUpdateBidList],
    ["/hello.candle.candle.MsgCreateAuctionMap", MsgCreateAuctionMap],
    ["/hello.candle.candle.MsgCreateBidList", MsgCreateBidList],
    ["/hello.candle.candle.MsgDeleteBidList", MsgDeleteBidList],
    ["/hello.candle.candle.MsgCreateResultsMap", MsgCreateResultsMap],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteResultsMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgDeleteResultsMap", value: data }),
        msgCreateAuction: (data) => ({ typeUrl: "/hello.candle.candle.MsgCreateAuction", value: data }),
        msgUpdateBidMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgUpdateBidMap", value: data }),
        msgUpdateResultsMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgUpdateResultsMap", value: data }),
        msgUpdateAuctionMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgUpdateAuctionMap", value: data }),
        msgDeleteBidMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgDeleteBidMap", value: data }),
        msgFinalizeAuction: (data) => ({ typeUrl: "/hello.candle.candle.MsgFinalizeAuction", value: data }),
        msgDeleteAuctionMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgDeleteAuctionMap", value: data }),
        msgCreateBidMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgCreateBidMap", value: data }),
        msgCreateBid: (data) => ({ typeUrl: "/hello.candle.candle.MsgCreateBid", value: data }),
        msgUpdateBidList: (data) => ({ typeUrl: "/hello.candle.candle.MsgUpdateBidList", value: data }),
        msgCreateAuctionMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgCreateAuctionMap", value: data }),
        msgCreateBidList: (data) => ({ typeUrl: "/hello.candle.candle.MsgCreateBidList", value: data }),
        msgDeleteBidList: (data) => ({ typeUrl: "/hello.candle.candle.MsgDeleteBidList", value: data }),
        msgCreateResultsMap: (data) => ({ typeUrl: "/hello.candle.candle.MsgCreateResultsMap", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
