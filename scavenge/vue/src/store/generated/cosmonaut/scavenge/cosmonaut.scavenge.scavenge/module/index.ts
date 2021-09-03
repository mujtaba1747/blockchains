// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRevealSolution } from "./types/scavenge/tx";
import { MsgCommitSolution } from "./types/scavenge/tx";
import { MsgSubmitScavenge } from "./types/scavenge/tx";


const types = [
  ["/cosmonaut.scavenge.scavenge.MsgRevealSolution", MsgRevealSolution],
  ["/cosmonaut.scavenge.scavenge.MsgCommitSolution", MsgCommitSolution],
  ["/cosmonaut.scavenge.scavenge.MsgSubmitScavenge", MsgSubmitScavenge],
  
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
    msgRevealSolution: (data: MsgRevealSolution): EncodeObject => ({ typeUrl: "/cosmonaut.scavenge.scavenge.MsgRevealSolution", value: data }),
    msgCommitSolution: (data: MsgCommitSolution): EncodeObject => ({ typeUrl: "/cosmonaut.scavenge.scavenge.MsgCommitSolution", value: data }),
    msgSubmitScavenge: (data: MsgSubmitScavenge): EncodeObject => ({ typeUrl: "/cosmonaut.scavenge.scavenge.MsgSubmitScavenge", value: data }),
    
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
