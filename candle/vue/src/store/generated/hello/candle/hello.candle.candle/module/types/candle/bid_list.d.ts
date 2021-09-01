import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "hello.candle.candle";
export interface BidList {
    creator: string;
    id: number;
    auctionId: string;
    amt: number;
}
export declare const BidList: {
    encode(message: BidList, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BidList;
    fromJSON(object: any): BidList;
    toJSON(message: BidList): unknown;
    fromPartial(object: DeepPartial<BidList>): BidList;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
