import { Reader, Writer } from 'protobufjs/minimal';
import { ResultsMap } from '../candle/results_map';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { BidList } from '../candle/bid_list';
import { AuctionMap } from '../candle/auction_map';
export declare const protobufPackage = "hello.candle.candle";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetResultsMapRequest {
    index: string;
}
export interface QueryGetResultsMapResponse {
    ResultsMap: ResultsMap | undefined;
}
export interface QueryAllResultsMapRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllResultsMapResponse {
    ResultsMap: ResultsMap[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBidListRequest {
    id: number;
}
export interface QueryGetBidListResponse {
    BidList: BidList | undefined;
}
export interface QueryAllBidListRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBidListResponse {
    BidList: BidList[];
    pagination: PageResponse | undefined;
}
export interface QueryGetAuctionMapRequest {
    index: string;
}
export interface QueryGetAuctionMapResponse {
    AuctionMap: AuctionMap | undefined;
}
export interface QueryAllAuctionMapRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllAuctionMapResponse {
    AuctionMap: AuctionMap[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetResultsMapRequest: {
    encode(message: QueryGetResultsMapRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetResultsMapRequest;
    fromJSON(object: any): QueryGetResultsMapRequest;
    toJSON(message: QueryGetResultsMapRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetResultsMapRequest>): QueryGetResultsMapRequest;
};
export declare const QueryGetResultsMapResponse: {
    encode(message: QueryGetResultsMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetResultsMapResponse;
    fromJSON(object: any): QueryGetResultsMapResponse;
    toJSON(message: QueryGetResultsMapResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetResultsMapResponse>): QueryGetResultsMapResponse;
};
export declare const QueryAllResultsMapRequest: {
    encode(message: QueryAllResultsMapRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllResultsMapRequest;
    fromJSON(object: any): QueryAllResultsMapRequest;
    toJSON(message: QueryAllResultsMapRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllResultsMapRequest>): QueryAllResultsMapRequest;
};
export declare const QueryAllResultsMapResponse: {
    encode(message: QueryAllResultsMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllResultsMapResponse;
    fromJSON(object: any): QueryAllResultsMapResponse;
    toJSON(message: QueryAllResultsMapResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllResultsMapResponse>): QueryAllResultsMapResponse;
};
export declare const QueryGetBidListRequest: {
    encode(message: QueryGetBidListRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBidListRequest;
    fromJSON(object: any): QueryGetBidListRequest;
    toJSON(message: QueryGetBidListRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBidListRequest>): QueryGetBidListRequest;
};
export declare const QueryGetBidListResponse: {
    encode(message: QueryGetBidListResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBidListResponse;
    fromJSON(object: any): QueryGetBidListResponse;
    toJSON(message: QueryGetBidListResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBidListResponse>): QueryGetBidListResponse;
};
export declare const QueryAllBidListRequest: {
    encode(message: QueryAllBidListRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBidListRequest;
    fromJSON(object: any): QueryAllBidListRequest;
    toJSON(message: QueryAllBidListRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBidListRequest>): QueryAllBidListRequest;
};
export declare const QueryAllBidListResponse: {
    encode(message: QueryAllBidListResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBidListResponse;
    fromJSON(object: any): QueryAllBidListResponse;
    toJSON(message: QueryAllBidListResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBidListResponse>): QueryAllBidListResponse;
};
export declare const QueryGetAuctionMapRequest: {
    encode(message: QueryGetAuctionMapRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAuctionMapRequest;
    fromJSON(object: any): QueryGetAuctionMapRequest;
    toJSON(message: QueryGetAuctionMapRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAuctionMapRequest>): QueryGetAuctionMapRequest;
};
export declare const QueryGetAuctionMapResponse: {
    encode(message: QueryGetAuctionMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAuctionMapResponse;
    fromJSON(object: any): QueryGetAuctionMapResponse;
    toJSON(message: QueryGetAuctionMapResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAuctionMapResponse>): QueryGetAuctionMapResponse;
};
export declare const QueryAllAuctionMapRequest: {
    encode(message: QueryAllAuctionMapRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAuctionMapRequest;
    fromJSON(object: any): QueryAllAuctionMapRequest;
    toJSON(message: QueryAllAuctionMapRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllAuctionMapRequest>): QueryAllAuctionMapRequest;
};
export declare const QueryAllAuctionMapResponse: {
    encode(message: QueryAllAuctionMapResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAuctionMapResponse;
    fromJSON(object: any): QueryAllAuctionMapResponse;
    toJSON(message: QueryAllAuctionMapResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllAuctionMapResponse>): QueryAllAuctionMapResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a resultsMap by index. */
    ResultsMap(request: QueryGetResultsMapRequest): Promise<QueryGetResultsMapResponse>;
    /** Queries a list of resultsMap items. */
    ResultsMapAll(request: QueryAllResultsMapRequest): Promise<QueryAllResultsMapResponse>;
    /** Queries a bidList by id. */
    BidList(request: QueryGetBidListRequest): Promise<QueryGetBidListResponse>;
    /** Queries a list of bidList items. */
    BidListAll(request: QueryAllBidListRequest): Promise<QueryAllBidListResponse>;
    /** Queries a auctionMap by index. */
    AuctionMap(request: QueryGetAuctionMapRequest): Promise<QueryGetAuctionMapResponse>;
    /** Queries a list of auctionMap items. */
    AuctionMapAll(request: QueryAllAuctionMapRequest): Promise<QueryAllAuctionMapResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ResultsMap(request: QueryGetResultsMapRequest): Promise<QueryGetResultsMapResponse>;
    ResultsMapAll(request: QueryAllResultsMapRequest): Promise<QueryAllResultsMapResponse>;
    BidList(request: QueryGetBidListRequest): Promise<QueryGetBidListResponse>;
    BidListAll(request: QueryAllBidListRequest): Promise<QueryAllBidListResponse>;
    AuctionMap(request: QueryGetAuctionMapRequest): Promise<QueryGetAuctionMapResponse>;
    AuctionMapAll(request: QueryAllAuctionMapRequest): Promise<QueryAllAuctionMapResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
