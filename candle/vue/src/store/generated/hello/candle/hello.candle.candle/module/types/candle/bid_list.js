/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'hello.candle.candle';
const baseBidList = { creator: '', id: 0, auctionId: '', amt: 0 };
export const BidList = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.auctionId !== '') {
            writer.uint32(26).string(message.auctionId);
        }
        if (message.amt !== 0) {
            writer.uint32(32).uint64(message.amt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBidList };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.auctionId = reader.string();
                    break;
                case 4:
                    message.amt = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBidList };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = String(object.auctionId);
        }
        else {
            message.auctionId = '';
        }
        if (object.amt !== undefined && object.amt !== null) {
            message.amt = Number(object.amt);
        }
        else {
            message.amt = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.auctionId !== undefined && (obj.auctionId = message.auctionId);
        message.amt !== undefined && (obj.amt = message.amt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBidList };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.auctionId !== undefined && object.auctionId !== null) {
            message.auctionId = object.auctionId;
        }
        else {
            message.auctionId = '';
        }
        if (object.amt !== undefined && object.amt !== null) {
            message.amt = object.amt;
        }
        else {
            message.amt = 0;
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
