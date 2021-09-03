import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.scavenge.scavenge";
export interface Commit {
    creator: string;
    index: string;
    solutionHash: string;
    solutionScavengerHash: string;
}
export declare const Commit: {
    encode(message: Commit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Commit;
    fromJSON(object: any): Commit;
    toJSON(message: Commit): unknown;
    fromPartial(object: DeepPartial<Commit>): Commit;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
