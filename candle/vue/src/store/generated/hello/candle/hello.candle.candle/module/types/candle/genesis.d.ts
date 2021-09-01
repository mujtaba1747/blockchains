import { Writer, Reader } from 'protobufjs/minimal';
import { BidMap } from '../candle/bid_map';
import { ResultsMap } from '../candle/results_map';
import { BidList } from '../candle/bid_list';
import { AuctionMap } from '../candle/auction_map';
export declare const protobufPackage = "hello.candle.candle";
/** GenesisState defines the candle module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    bidMapList: BidMap[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    resultsMapList: ResultsMap[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    bidListList: BidList[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    bidListCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    auctionMapList: AuctionMap[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
