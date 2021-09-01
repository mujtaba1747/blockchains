import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "hello.candle.candle";
export interface BidMap {
    creator: string;
    index: string;
    auctionId: string;
    amt: number;
    blockHeight: number;
}
export declare const BidMap: {
    encode(message: BidMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BidMap;
    fromJSON(object: any): BidMap;
    toJSON(message: BidMap): unknown;
    fromPartial(object: DeepPartial<BidMap>): BidMap;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
