import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.nameservice.nameservice";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateName {
    creator: string;
    name: string;
}
export interface MsgCreateNameResponse {
}
export interface MsgDeleteName {
    creator: string;
    name: string;
}
export interface MsgDeleteNameResponse {
}
export interface MsgSetName {
    creator: string;
    name: string;
    value: string;
}
export interface MsgSetNameResponse {
}
export interface MsgBuyName {
    creator: string;
    name: string;
    bid: string;
}
export interface MsgBuyNameResponse {
}
export declare const MsgCreateName: {
    encode(message: MsgCreateName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateName;
    fromJSON(object: any): MsgCreateName;
    toJSON(message: MsgCreateName): unknown;
    fromPartial(object: DeepPartial<MsgCreateName>): MsgCreateName;
};
export declare const MsgCreateNameResponse: {
    encode(_: MsgCreateNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateNameResponse;
    fromJSON(_: any): MsgCreateNameResponse;
    toJSON(_: MsgCreateNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateNameResponse>): MsgCreateNameResponse;
};
export declare const MsgDeleteName: {
    encode(message: MsgDeleteName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteName;
    fromJSON(object: any): MsgDeleteName;
    toJSON(message: MsgDeleteName): unknown;
    fromPartial(object: DeepPartial<MsgDeleteName>): MsgDeleteName;
};
export declare const MsgDeleteNameResponse: {
    encode(_: MsgDeleteNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteNameResponse;
    fromJSON(_: any): MsgDeleteNameResponse;
    toJSON(_: MsgDeleteNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteNameResponse>): MsgDeleteNameResponse;
};
export declare const MsgSetName: {
    encode(message: MsgSetName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetName;
    fromJSON(object: any): MsgSetName;
    toJSON(message: MsgSetName): unknown;
    fromPartial(object: DeepPartial<MsgSetName>): MsgSetName;
};
export declare const MsgSetNameResponse: {
    encode(_: MsgSetNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetNameResponse;
    fromJSON(_: any): MsgSetNameResponse;
    toJSON(_: MsgSetNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetNameResponse>): MsgSetNameResponse;
};
export declare const MsgBuyName: {
    encode(message: MsgBuyName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyName;
    fromJSON(object: any): MsgBuyName;
    toJSON(message: MsgBuyName): unknown;
    fromPartial(object: DeepPartial<MsgBuyName>): MsgBuyName;
};
export declare const MsgBuyNameResponse: {
    encode(_: MsgBuyNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyNameResponse;
    fromJSON(_: any): MsgBuyNameResponse;
    toJSON(_: MsgBuyNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyNameResponse>): MsgBuyNameResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse>;
    DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse>;
    DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
