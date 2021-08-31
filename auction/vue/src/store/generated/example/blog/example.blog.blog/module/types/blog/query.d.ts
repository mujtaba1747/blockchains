import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "example.blog.blog";
/** this line is used by starport scaffolding # 3 */
export interface QueryDetailsRequest {
}
export interface QueryDetailsResponse {
    body: string;
}
export declare const QueryDetailsRequest: {
    encode(_: QueryDetailsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDetailsRequest;
    fromJSON(_: any): QueryDetailsRequest;
    toJSON(_: QueryDetailsRequest): unknown;
    fromPartial(_: DeepPartial<QueryDetailsRequest>): QueryDetailsRequest;
};
export declare const QueryDetailsResponse: {
    encode(message: QueryDetailsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDetailsResponse;
    fromJSON(object: any): QueryDetailsResponse;
    toJSON(message: QueryDetailsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDetailsResponse>): QueryDetailsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of details items. */
    Details(request: QueryDetailsRequest): Promise<QueryDetailsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Details(request: QueryDetailsRequest): Promise<QueryDetailsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
