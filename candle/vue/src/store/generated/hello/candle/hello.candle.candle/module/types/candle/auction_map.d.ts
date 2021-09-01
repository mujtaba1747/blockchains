import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "hello.candle.candle";
export interface AuctionMap {
    creator: string;
    index: string;
    blockHeight: string;
    deadline: string;
}
export declare const AuctionMap: {
    encode(message: AuctionMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AuctionMap;
    fromJSON(object: any): AuctionMap;
    toJSON(message: AuctionMap): unknown;
    fromPartial(object: DeepPartial<AuctionMap>): AuctionMap;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
