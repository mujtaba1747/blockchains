import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.scavenge.scavenge";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgRevealSolution {
    creator: string;
    solution: string;
}
export interface MsgRevealSolutionResponse {
}
export interface MsgCommitSolution {
    creator: string;
    solutionHash: string;
    solutionScavengerHash: string;
}
export interface MsgCommitSolutionResponse {
}
export interface MsgSubmitScavenge {
    creator: string;
    solutionHash: string;
    description: string;
    reward: string;
}
export interface MsgSubmitScavengeResponse {
}
export declare const MsgRevealSolution: {
    encode(message: MsgRevealSolution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevealSolution;
    fromJSON(object: any): MsgRevealSolution;
    toJSON(message: MsgRevealSolution): unknown;
    fromPartial(object: DeepPartial<MsgRevealSolution>): MsgRevealSolution;
};
export declare const MsgRevealSolutionResponse: {
    encode(_: MsgRevealSolutionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevealSolutionResponse;
    fromJSON(_: any): MsgRevealSolutionResponse;
    toJSON(_: MsgRevealSolutionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevealSolutionResponse>): MsgRevealSolutionResponse;
};
export declare const MsgCommitSolution: {
    encode(message: MsgCommitSolution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCommitSolution;
    fromJSON(object: any): MsgCommitSolution;
    toJSON(message: MsgCommitSolution): unknown;
    fromPartial(object: DeepPartial<MsgCommitSolution>): MsgCommitSolution;
};
export declare const MsgCommitSolutionResponse: {
    encode(_: MsgCommitSolutionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCommitSolutionResponse;
    fromJSON(_: any): MsgCommitSolutionResponse;
    toJSON(_: MsgCommitSolutionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCommitSolutionResponse>): MsgCommitSolutionResponse;
};
export declare const MsgSubmitScavenge: {
    encode(message: MsgSubmitScavenge, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitScavenge;
    fromJSON(object: any): MsgSubmitScavenge;
    toJSON(message: MsgSubmitScavenge): unknown;
    fromPartial(object: DeepPartial<MsgSubmitScavenge>): MsgSubmitScavenge;
};
export declare const MsgSubmitScavengeResponse: {
    encode(_: MsgSubmitScavengeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitScavengeResponse;
    fromJSON(_: any): MsgSubmitScavengeResponse;
    toJSON(_: MsgSubmitScavengeResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitScavengeResponse>): MsgSubmitScavengeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RevealSolution(request: MsgRevealSolution): Promise<MsgRevealSolutionResponse>;
    CommitSolution(request: MsgCommitSolution): Promise<MsgCommitSolutionResponse>;
    SubmitScavenge(request: MsgSubmitScavenge): Promise<MsgSubmitScavengeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RevealSolution(request: MsgRevealSolution): Promise<MsgRevealSolutionResponse>;
    CommitSolution(request: MsgCommitSolution): Promise<MsgCommitSolutionResponse>;
    SubmitScavenge(request: MsgSubmitScavenge): Promise<MsgSubmitScavengeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
