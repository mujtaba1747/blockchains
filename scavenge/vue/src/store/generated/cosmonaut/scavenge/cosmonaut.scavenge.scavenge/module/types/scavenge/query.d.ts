import { Reader, Writer } from 'protobufjs/minimal';
import { Commit } from '../scavenge/commit';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Scavenge } from '../scavenge/scavenge';
export declare const protobufPackage = "cosmonaut.scavenge.scavenge";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetCommitRequest {
    index: string;
}
export interface QueryGetCommitResponse {
    Commit: Commit | undefined;
}
export interface QueryAllCommitRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCommitResponse {
    Commit: Commit[];
    pagination: PageResponse | undefined;
}
export interface QueryGetScavengeRequest {
    index: string;
}
export interface QueryGetScavengeResponse {
    Scavenge: Scavenge | undefined;
}
export interface QueryAllScavengeRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllScavengeResponse {
    Scavenge: Scavenge[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCommitRequest: {
    encode(message: QueryGetCommitRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommitRequest;
    fromJSON(object: any): QueryGetCommitRequest;
    toJSON(message: QueryGetCommitRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCommitRequest>): QueryGetCommitRequest;
};
export declare const QueryGetCommitResponse: {
    encode(message: QueryGetCommitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCommitResponse;
    fromJSON(object: any): QueryGetCommitResponse;
    toJSON(message: QueryGetCommitResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCommitResponse>): QueryGetCommitResponse;
};
export declare const QueryAllCommitRequest: {
    encode(message: QueryAllCommitRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommitRequest;
    fromJSON(object: any): QueryAllCommitRequest;
    toJSON(message: QueryAllCommitRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCommitRequest>): QueryAllCommitRequest;
};
export declare const QueryAllCommitResponse: {
    encode(message: QueryAllCommitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCommitResponse;
    fromJSON(object: any): QueryAllCommitResponse;
    toJSON(message: QueryAllCommitResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCommitResponse>): QueryAllCommitResponse;
};
export declare const QueryGetScavengeRequest: {
    encode(message: QueryGetScavengeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScavengeRequest;
    fromJSON(object: any): QueryGetScavengeRequest;
    toJSON(message: QueryGetScavengeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetScavengeRequest>): QueryGetScavengeRequest;
};
export declare const QueryGetScavengeResponse: {
    encode(message: QueryGetScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScavengeResponse;
    fromJSON(object: any): QueryGetScavengeResponse;
    toJSON(message: QueryGetScavengeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetScavengeResponse>): QueryGetScavengeResponse;
};
export declare const QueryAllScavengeRequest: {
    encode(message: QueryAllScavengeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScavengeRequest;
    fromJSON(object: any): QueryAllScavengeRequest;
    toJSON(message: QueryAllScavengeRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllScavengeRequest>): QueryAllScavengeRequest;
};
export declare const QueryAllScavengeResponse: {
    encode(message: QueryAllScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScavengeResponse;
    fromJSON(object: any): QueryAllScavengeResponse;
    toJSON(message: QueryAllScavengeResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllScavengeResponse>): QueryAllScavengeResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a commit by index. */
    Commit(request: QueryGetCommitRequest): Promise<QueryGetCommitResponse>;
    /** Queries a list of commit items. */
    CommitAll(request: QueryAllCommitRequest): Promise<QueryAllCommitResponse>;
    /** Queries a scavenge by index. */
    Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse>;
    /** Queries a list of scavenge items. */
    ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Commit(request: QueryGetCommitRequest): Promise<QueryGetCommitResponse>;
    CommitAll(request: QueryAllCommitRequest): Promise<QueryAllCommitResponse>;
    Scavenge(request: QueryGetScavengeRequest): Promise<QueryGetScavengeResponse>;
    ScavengeAll(request: QueryAllScavengeRequest): Promise<QueryAllScavengeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
