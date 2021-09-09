/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'hello.candle.candle';
const baseResultsMap = { creator: '', index: '', winner: '', bidId: '', endHeight: 0 };
export const ResultsMap = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.winner !== '') {
            writer.uint32(26).string(message.winner);
        }
        if (message.bidId !== '') {
            writer.uint32(34).string(message.bidId);
        }
        if (message.endHeight !== 0) {
            writer.uint32(40).int64(message.endHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResultsMap };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.winner = reader.string();
                    break;
                case 4:
                    message.bidId = reader.string();
                    break;
                case 5:
                    message.endHeight = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResultsMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = String(object.winner);
        }
        else {
            message.winner = '';
        }
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = String(object.bidId);
        }
        else {
            message.bidId = '';
        }
        if (object.endHeight !== undefined && object.endHeight !== null) {
            message.endHeight = Number(object.endHeight);
        }
        else {
            message.endHeight = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.winner !== undefined && (obj.winner = message.winner);
        message.bidId !== undefined && (obj.bidId = message.bidId);
        message.endHeight !== undefined && (obj.endHeight = message.endHeight);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResultsMap };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = object.winner;
        }
        else {
            message.winner = '';
        }
        if (object.bidId !== undefined && object.bidId !== null) {
            message.bidId = object.bidId;
        }
        else {
            message.bidId = '';
        }
        if (object.endHeight !== undefined && object.endHeight !== null) {
            message.endHeight = object.endHeight;
        }
        else {
            message.endHeight = 0;
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
