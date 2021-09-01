import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "hello.candle.candle";
export interface ResultsMap {
    creator: string;
    index: string;
    winner: string;
    bidId: number;
}
export declare const ResultsMap: {
    encode(message: ResultsMap, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ResultsMap;
    fromJSON(object: any): ResultsMap;
    toJSON(message: ResultsMap): unknown;
    fromPartial(object: DeepPartial<ResultsMap>): ResultsMap;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
