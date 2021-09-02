// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteBidMap } from "./types/candle/tx";
import { MsgCreateResultsMap } from "./types/candle/tx";
import { MsgDeleteResultsMap } from "./types/candle/tx";
import { MsgDeleteBidList } from "./types/candle/tx";
import { MsgCreateBidList } from "./types/candle/tx";
import { MsgCreateAuction } from "./types/candle/tx";
import { MsgUpdateBidList } from "./types/candle/tx";
import { MsgUpdateAuctionMap } from "./types/candle/tx";
import { MsgDeleteAuctionMap } from "./types/candle/tx";
import { MsgCreateBidMap } from "./types/candle/tx";
import { MsgCreateBid } from "./types/candle/tx";
import { MsgUpdateBidMap } from "./types/candle/tx";
import { MsgCreateAuctionMap } from "./types/candle/tx";
import { MsgUpdateResultsMap } from "./types/candle/tx";
import { MsgFinalizeAuction } from "./types/candle/tx";


const types = [
  ["/hello.candle.candle.MsgDeleteBidMap", MsgDeleteBidMap],
  ["/hello.candle.candle.MsgCreateResultsMap", MsgCreateResultsMap],
  ["/hello.candle.candle.MsgDeleteResultsMap", MsgDeleteResultsMap],
  ["/hello.candle.candle.MsgDeleteBidList", MsgDeleteBidList],
  ["/hello.candle.candle.MsgCreateBidList", MsgCreateBidList],
  ["/hello.candle.candle.MsgCreateAuction", MsgCreateAuction],
  ["/hello.candle.candle.MsgUpdateBidList", MsgUpdateBidList],
  ["/hello.candle.candle.MsgUpdateAuctionMap", MsgUpdateAuctionMap],
  ["/hello.candle.candle.MsgDeleteAuctionMap", MsgDeleteAuctionMap],
  ["/hello.candle.candle.MsgCreateBidMap", MsgCreateBidMap],
  ["/hello.candle.candle.MsgCreateBid", MsgCreateBid],
  ["/hello.candle.candle.MsgUpdateBidMap", MsgUpdateBidMap],
  ["/hello.candle.candle.MsgCreateAuctionMap", MsgCreateAuctionMap],
  ["/hello.candle.candle.MsgUpdateResultsMap", MsgUpdateResultsMap],
  ["/hello.candle.candle.MsgFinalizeAuction", MsgFinalizeAuction],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteBidMap: (data: MsgDeleteBidMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgDeleteBidMap", value: data }),
    msgCreateResultsMap: (data: MsgCreateResultsMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgCreateResultsMap", value: data }),
    msgDeleteResultsMap: (data: MsgDeleteResultsMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgDeleteResultsMap", value: data }),
    msgDeleteBidList: (data: MsgDeleteBidList): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgDeleteBidList", value: data }),
    msgCreateBidList: (data: MsgCreateBidList): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgCreateBidList", value: data }),
    msgCreateAuction: (data: MsgCreateAuction): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgCreateAuction", value: data }),
    msgUpdateBidList: (data: MsgUpdateBidList): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgUpdateBidList", value: data }),
    msgUpdateAuctionMap: (data: MsgUpdateAuctionMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgUpdateAuctionMap", value: data }),
    msgDeleteAuctionMap: (data: MsgDeleteAuctionMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgDeleteAuctionMap", value: data }),
    msgCreateBidMap: (data: MsgCreateBidMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgCreateBidMap", value: data }),
    msgCreateBid: (data: MsgCreateBid): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgCreateBid", value: data }),
    msgUpdateBidMap: (data: MsgUpdateBidMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgUpdateBidMap", value: data }),
    msgCreateAuctionMap: (data: MsgCreateAuctionMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgCreateAuctionMap", value: data }),
    msgUpdateResultsMap: (data: MsgUpdateResultsMap): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgUpdateResultsMap", value: data }),
    msgFinalizeAuction: (data: MsgFinalizeAuction): EncodeObject => ({ typeUrl: "/hello.candle.candle.MsgFinalizeAuction", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
