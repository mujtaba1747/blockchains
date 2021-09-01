import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "hello.candle.candle";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateResultsMap {
    creator: string;
    index: string;
    winner: string;
    bidId: number;
}
export interface MsgCreateResultsMapResponse {
}
export interface MsgUpdateResultsMap {
    creator: string;
    index: string;
    winner: string;
    bidId: number;
}
export interface MsgUpdateResultsMapResponse {
}
export interface MsgDeleteResultsMap {
    creator: string;
    index: string;
}
export interface MsgDeleteResultsMapResponse {
}
export interface MsgCreateBidList {
    creator: string;
    auctionId: string;
    amt: number;
}
export interface MsgCreateBidListResponse {
    id: number;
}
export interface MsgUpdateBidList {
    creator: string;
    id: number;
    auctionId: string;
    amt: number;
}
export interface MsgUpdateBidListResponse {
}
export interface MsgDeleteBidList {
    creator: string;
    id: number;
}
export interface MsgDeleteBidListResponse {
}
export interface MsgCreateAuctionMap {
    creator: string;
    index: string;
    blockHeight: string;
    deadline: string;
}
export interface MsgCreateAuctionMapResponse {
}
export interface MsgUpdateAuctionMap {
    creator: string;
    index: string;
    blockHeight: string;
    deadline: string;
}
export interface MsgUpdateAuctionMapResponse {
}
export interface MsgDeleteAuctionMap {
    creator: string;
    index: string;
}
export interface MsgDeleteAuctionMapResponse {
}
export interface MsgFinalizeAuction {
    creator: string;
    auctionId: string;
}
export interface MsgFinalizeAuctionResponse {
}
export interface MsgCreateBid {
    creator: string;
    auctionId: string;
    amt: number;
}
export interface MsgCreateBidResponse {
}
export interface MsgCreateAuction {
    creator: string;
    title: string;
}
export interface MsgCreateAuctionResponse {
}
export declare const MsgCreateResultsMap: {
    encode(message: MsgCreateResultsMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateResultsMap;
    fromJSON(object: any): MsgCreateResultsMap;
    toJSON(message: MsgCreateResultsMap): unknown;
    fromPartial(object: DeepPartial<MsgCreateResultsMap>): MsgCreateResultsMap;
};
export declare const MsgCreateResultsMapResponse: {
    encode(_: MsgCreateResultsMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateResultsMapResponse;
    fromJSON(_: any): MsgCreateResultsMapResponse;
    toJSON(_: MsgCreateResultsMapResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateResultsMapResponse>): MsgCreateResultsMapResponse;
};
export declare const MsgUpdateResultsMap: {
    encode(message: MsgUpdateResultsMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateResultsMap;
    fromJSON(object: any): MsgUpdateResultsMap;
    toJSON(message: MsgUpdateResultsMap): unknown;
    fromPartial(object: DeepPartial<MsgUpdateResultsMap>): MsgUpdateResultsMap;
};
export declare const MsgUpdateResultsMapResponse: {
    encode(_: MsgUpdateResultsMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateResultsMapResponse;
    fromJSON(_: any): MsgUpdateResultsMapResponse;
    toJSON(_: MsgUpdateResultsMapResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateResultsMapResponse>): MsgUpdateResultsMapResponse;
};
export declare const MsgDeleteResultsMap: {
    encode(message: MsgDeleteResultsMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteResultsMap;
    fromJSON(object: any): MsgDeleteResultsMap;
    toJSON(message: MsgDeleteResultsMap): unknown;
    fromPartial(object: DeepPartial<MsgDeleteResultsMap>): MsgDeleteResultsMap;
};
export declare const MsgDeleteResultsMapResponse: {
    encode(_: MsgDeleteResultsMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteResultsMapResponse;
    fromJSON(_: any): MsgDeleteResultsMapResponse;
    toJSON(_: MsgDeleteResultsMapResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteResultsMapResponse>): MsgDeleteResultsMapResponse;
};
export declare const MsgCreateBidList: {
    encode(message: MsgCreateBidList, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBidList;
    fromJSON(object: any): MsgCreateBidList;
    toJSON(message: MsgCreateBidList): unknown;
    fromPartial(object: DeepPartial<MsgCreateBidList>): MsgCreateBidList;
};
export declare const MsgCreateBidListResponse: {
    encode(message: MsgCreateBidListResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBidListResponse;
    fromJSON(object: any): MsgCreateBidListResponse;
    toJSON(message: MsgCreateBidListResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBidListResponse>): MsgCreateBidListResponse;
};
export declare const MsgUpdateBidList: {
    encode(message: MsgUpdateBidList, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBidList;
    fromJSON(object: any): MsgUpdateBidList;
    toJSON(message: MsgUpdateBidList): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBidList>): MsgUpdateBidList;
};
export declare const MsgUpdateBidListResponse: {
    encode(_: MsgUpdateBidListResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBidListResponse;
    fromJSON(_: any): MsgUpdateBidListResponse;
    toJSON(_: MsgUpdateBidListResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBidListResponse>): MsgUpdateBidListResponse;
};
export declare const MsgDeleteBidList: {
    encode(message: MsgDeleteBidList, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBidList;
    fromJSON(object: any): MsgDeleteBidList;
    toJSON(message: MsgDeleteBidList): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBidList>): MsgDeleteBidList;
};
export declare const MsgDeleteBidListResponse: {
    encode(_: MsgDeleteBidListResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBidListResponse;
    fromJSON(_: any): MsgDeleteBidListResponse;
    toJSON(_: MsgDeleteBidListResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBidListResponse>): MsgDeleteBidListResponse;
};
export declare const MsgCreateAuctionMap: {
    encode(message: MsgCreateAuctionMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAuctionMap;
    fromJSON(object: any): MsgCreateAuctionMap;
    toJSON(message: MsgCreateAuctionMap): unknown;
    fromPartial(object: DeepPartial<MsgCreateAuctionMap>): MsgCreateAuctionMap;
};
export declare const MsgCreateAuctionMapResponse: {
    encode(_: MsgCreateAuctionMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAuctionMapResponse;
    fromJSON(_: any): MsgCreateAuctionMapResponse;
    toJSON(_: MsgCreateAuctionMapResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateAuctionMapResponse>): MsgCreateAuctionMapResponse;
};
export declare const MsgUpdateAuctionMap: {
    encode(message: MsgUpdateAuctionMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAuctionMap;
    fromJSON(object: any): MsgUpdateAuctionMap;
    toJSON(message: MsgUpdateAuctionMap): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAuctionMap>): MsgUpdateAuctionMap;
};
export declare const MsgUpdateAuctionMapResponse: {
    encode(_: MsgUpdateAuctionMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAuctionMapResponse;
    fromJSON(_: any): MsgUpdateAuctionMapResponse;
    toJSON(_: MsgUpdateAuctionMapResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAuctionMapResponse>): MsgUpdateAuctionMapResponse;
};
export declare const MsgDeleteAuctionMap: {
    encode(message: MsgDeleteAuctionMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAuctionMap;
    fromJSON(object: any): MsgDeleteAuctionMap;
    toJSON(message: MsgDeleteAuctionMap): unknown;
    fromPartial(object: DeepPartial<MsgDeleteAuctionMap>): MsgDeleteAuctionMap;
};
export declare const MsgDeleteAuctionMapResponse: {
    encode(_: MsgDeleteAuctionMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAuctionMapResponse;
    fromJSON(_: any): MsgDeleteAuctionMapResponse;
    toJSON(_: MsgDeleteAuctionMapResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteAuctionMapResponse>): MsgDeleteAuctionMapResponse;
};
export declare const MsgFinalizeAuction: {
    encode(message: MsgFinalizeAuction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFinalizeAuction;
    fromJSON(object: any): MsgFinalizeAuction;
    toJSON(message: MsgFinalizeAuction): unknown;
    fromPartial(object: DeepPartial<MsgFinalizeAuction>): MsgFinalizeAuction;
};
export declare const MsgFinalizeAuctionResponse: {
    encode(_: MsgFinalizeAuctionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFinalizeAuctionResponse;
    fromJSON(_: any): MsgFinalizeAuctionResponse;
    toJSON(_: MsgFinalizeAuctionResponse): unknown;
    fromPartial(_: DeepPartial<MsgFinalizeAuctionResponse>): MsgFinalizeAuctionResponse;
};
export declare const MsgCreateBid: {
    encode(message: MsgCreateBid, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBid;
    fromJSON(object: any): MsgCreateBid;
    toJSON(message: MsgCreateBid): unknown;
    fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid;
};
export declare const MsgCreateBidResponse: {
    encode(_: MsgCreateBidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBidResponse;
    fromJSON(_: any): MsgCreateBidResponse;
    toJSON(_: MsgCreateBidResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse;
};
export declare const MsgCreateAuction: {
    encode(message: MsgCreateAuction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAuction;
    fromJSON(object: any): MsgCreateAuction;
    toJSON(message: MsgCreateAuction): unknown;
    fromPartial(object: DeepPartial<MsgCreateAuction>): MsgCreateAuction;
};
export declare const MsgCreateAuctionResponse: {
    encode(_: MsgCreateAuctionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAuctionResponse;
    fromJSON(_: any): MsgCreateAuctionResponse;
    toJSON(_: MsgCreateAuctionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateAuctionResponse>): MsgCreateAuctionResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateResultsMap(request: MsgCreateResultsMap): Promise<MsgCreateResultsMapResponse>;
    UpdateResultsMap(request: MsgUpdateResultsMap): Promise<MsgUpdateResultsMapResponse>;
    DeleteResultsMap(request: MsgDeleteResultsMap): Promise<MsgDeleteResultsMapResponse>;
    CreateBidList(request: MsgCreateBidList): Promise<MsgCreateBidListResponse>;
    UpdateBidList(request: MsgUpdateBidList): Promise<MsgUpdateBidListResponse>;
    DeleteBidList(request: MsgDeleteBidList): Promise<MsgDeleteBidListResponse>;
    CreateAuctionMap(request: MsgCreateAuctionMap): Promise<MsgCreateAuctionMapResponse>;
    UpdateAuctionMap(request: MsgUpdateAuctionMap): Promise<MsgUpdateAuctionMapResponse>;
    DeleteAuctionMap(request: MsgDeleteAuctionMap): Promise<MsgDeleteAuctionMapResponse>;
    FinalizeAuction(request: MsgFinalizeAuction): Promise<MsgFinalizeAuctionResponse>;
    CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
    CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateResultsMap(request: MsgCreateResultsMap): Promise<MsgCreateResultsMapResponse>;
    UpdateResultsMap(request: MsgUpdateResultsMap): Promise<MsgUpdateResultsMapResponse>;
    DeleteResultsMap(request: MsgDeleteResultsMap): Promise<MsgDeleteResultsMapResponse>;
    CreateBidList(request: MsgCreateBidList): Promise<MsgCreateBidListResponse>;
    UpdateBidList(request: MsgUpdateBidList): Promise<MsgUpdateBidListResponse>;
    DeleteBidList(request: MsgDeleteBidList): Promise<MsgDeleteBidListResponse>;
    CreateAuctionMap(request: MsgCreateAuctionMap): Promise<MsgCreateAuctionMapResponse>;
    UpdateAuctionMap(request: MsgUpdateAuctionMap): Promise<MsgUpdateAuctionMapResponse>;
    DeleteAuctionMap(request: MsgDeleteAuctionMap): Promise<MsgDeleteAuctionMapResponse>;
    FinalizeAuction(request: MsgFinalizeAuction): Promise<MsgFinalizeAuctionResponse>;
    CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
    CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
