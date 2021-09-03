import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.scavenge.scavenge";
export interface Scavenge {
    creator: string;
    index: string;
    solutionHash: string;
    solution: string;
    description: string;
    reward: string;
    scavenger: string;
}
export declare const Scavenge: {
    encode(message: Scavenge, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Scavenge;
    fromJSON(object: any): Scavenge;
    toJSON(message: Scavenge): unknown;
    fromPartial(object: DeepPartial<Scavenge>): Scavenge;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
