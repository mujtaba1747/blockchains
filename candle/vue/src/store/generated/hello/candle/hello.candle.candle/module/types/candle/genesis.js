/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { ResultsMap } from '../candle/results_map';
import { BidList } from '../candle/bid_list';
import { AuctionMap } from '../candle/auction_map';
export const protobufPackage = 'hello.candle.candle';
const baseGenesisState = { bidListCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.resultsMapList) {
            ResultsMap.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.bidListList) {
            BidList.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.bidListCount !== 0) {
            writer.uint32(24).uint64(message.bidListCount);
        }
        for (const v of message.auctionMapList) {
            AuctionMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.resultsMapList = [];
        message.bidListList = [];
        message.auctionMapList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.resultsMapList.push(ResultsMap.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.bidListList.push(BidList.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.bidListCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.auctionMapList.push(AuctionMap.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.resultsMapList = [];
        message.bidListList = [];
        message.auctionMapList = [];
        if (object.resultsMapList !== undefined && object.resultsMapList !== null) {
            for (const e of object.resultsMapList) {
                message.resultsMapList.push(ResultsMap.fromJSON(e));
            }
        }
        if (object.bidListList !== undefined && object.bidListList !== null) {
            for (const e of object.bidListList) {
                message.bidListList.push(BidList.fromJSON(e));
            }
        }
        if (object.bidListCount !== undefined && object.bidListCount !== null) {
            message.bidListCount = Number(object.bidListCount);
        }
        else {
            message.bidListCount = 0;
        }
        if (object.auctionMapList !== undefined && object.auctionMapList !== null) {
            for (const e of object.auctionMapList) {
                message.auctionMapList.push(AuctionMap.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.resultsMapList) {
            obj.resultsMapList = message.resultsMapList.map((e) => (e ? ResultsMap.toJSON(e) : undefined));
        }
        else {
            obj.resultsMapList = [];
        }
        if (message.bidListList) {
            obj.bidListList = message.bidListList.map((e) => (e ? BidList.toJSON(e) : undefined));
        }
        else {
            obj.bidListList = [];
        }
        message.bidListCount !== undefined && (obj.bidListCount = message.bidListCount);
        if (message.auctionMapList) {
            obj.auctionMapList = message.auctionMapList.map((e) => (e ? AuctionMap.toJSON(e) : undefined));
        }
        else {
            obj.auctionMapList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.resultsMapList = [];
        message.bidListList = [];
        message.auctionMapList = [];
        if (object.resultsMapList !== undefined && object.resultsMapList !== null) {
            for (const e of object.resultsMapList) {
                message.resultsMapList.push(ResultsMap.fromPartial(e));
            }
        }
        if (object.bidListList !== undefined && object.bidListList !== null) {
            for (const e of object.bidListList) {
                message.bidListList.push(BidList.fromPartial(e));
            }
        }
        if (object.bidListCount !== undefined && object.bidListCount !== null) {
            message.bidListCount = object.bidListCount;
        }
        else {
            message.bidListCount = 0;
        }
        if (object.auctionMapList !== undefined && object.auctionMapList !== null) {
            for (const e of object.auctionMapList) {
                message.auctionMapList.push(AuctionMap.fromPartial(e));
            }
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
