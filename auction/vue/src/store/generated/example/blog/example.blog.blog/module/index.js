// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgFinalizeAuction } from "./types/blog/auction";
import { MsgCreatePost } from "./types/blog/post";
import { MsgCreateBid } from "./types/blog/auction";
import { MsgCreateAuction } from "./types/blog/auction";
const types = [
    ["/example.blog.blog.MsgFinalizeAuction", MsgFinalizeAuction],
    ["/example.blog.blog.MsgCreatePost", MsgCreatePost],
    ["/example.blog.blog.MsgCreateBid", MsgCreateBid],
    ["/example.blog.blog.MsgCreateAuction", MsgCreateAuction],
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
        msgFinalizeAuction: (data) => ({ typeUrl: "/example.blog.blog.MsgFinalizeAuction", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/example.blog.blog.MsgCreatePost", value: data }),
        msgCreateBid: (data) => ({ typeUrl: "/example.blog.blog.MsgCreateBid", value: data }),
        msgCreateAuction: (data) => ({ typeUrl: "/example.blog.blog.MsgCreateAuction", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
