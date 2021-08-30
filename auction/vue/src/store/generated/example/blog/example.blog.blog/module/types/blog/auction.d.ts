import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "example.blog.blog";
/** proto/blog/auction.proto */
export interface Auction {
    creator: string;
    id: string;
    title: string;
    body: string;
    deadline: number;
    blockHeight: number;
}
export interface MsgCreateAuction {
    creator: string;
    title: string;
    body: string;
    deadline: number;
    blockHeight: number;
}
export interface Bid {
    creator: string;
    id: string;
    auctionId: string;
    amt: number;
}
export interface MsgCreateBid {
    creator: string;
    auctionId: string;
    amt: number;
}
export interface FinalizeAuction {
    creator: string;
    id: string;
    auctionId: string;
    winner: string;
}
export interface MsgFinalizeAuction {
    creator: string;
    auctionId: string;
}
export declare const Auction: {
    encode(message: Auction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Auction;
    fromJSON(object: any): Auction;
    toJSON(message: Auction): unknown;
    fromPartial(object: DeepPartial<Auction>): Auction;
};
export declare const MsgCreateAuction: {
    encode(message: MsgCreateAuction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAuction;
    fromJSON(object: any): MsgCreateAuction;
    toJSON(message: MsgCreateAuction): unknown;
    fromPartial(object: DeepPartial<MsgCreateAuction>): MsgCreateAuction;
};
export declare const Bid: {
    encode(message: Bid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Bid;
    fromJSON(object: any): Bid;
    toJSON(message: Bid): unknown;
    fromPartial(object: DeepPartial<Bid>): Bid;
};
export declare const MsgCreateBid: {
    encode(message: MsgCreateBid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBid;
    fromJSON(object: any): MsgCreateBid;
    toJSON(message: MsgCreateBid): unknown;
    fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid;
};
export declare const FinalizeAuction: {
    encode(message: FinalizeAuction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): FinalizeAuction;
    fromJSON(object: any): FinalizeAuction;
    toJSON(message: FinalizeAuction): unknown;
    fromPartial(object: DeepPartial<FinalizeAuction>): FinalizeAuction;
};
export declare const MsgFinalizeAuction: {
    encode(message: MsgFinalizeAuction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFinalizeAuction;
    fromJSON(object: any): MsgFinalizeAuction;
    toJSON(message: MsgFinalizeAuction): unknown;
    fromPartial(object: DeepPartial<MsgFinalizeAuction>): MsgFinalizeAuction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
