/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { BidMap } from '../candle/bid_map';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { ResultsMap } from '../candle/results_map';
import { BidList } from '../candle/bid_list';
import { AuctionMap } from '../candle/auction_map';
export const protobufPackage = 'hello.candle.candle';
const baseQueryGetBidMapRequest = { index: '' };
export const QueryGetBidMapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBidMapRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBidMapRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBidMapRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetBidMapResponse = {};
export const QueryGetBidMapResponse = {
    encode(message, writer = Writer.create()) {
        if (message.BidMap !== undefined) {
            BidMap.encode(message.BidMap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBidMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BidMap = BidMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBidMapResponse };
        if (object.BidMap !== undefined && object.BidMap !== null) {
            message.BidMap = BidMap.fromJSON(object.BidMap);
        }
        else {
            message.BidMap = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.BidMap !== undefined && (obj.BidMap = message.BidMap ? BidMap.toJSON(message.BidMap) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBidMapResponse };
        if (object.BidMap !== undefined && object.BidMap !== null) {
            message.BidMap = BidMap.fromPartial(object.BidMap);
        }
        else {
            message.BidMap = undefined;
        }
        return message;
    }
};
const baseQueryAllBidMapRequest = {};
export const QueryAllBidMapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBidMapRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBidMapRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBidMapRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBidMapResponse = {};
export const QueryAllBidMapResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.BidMap) {
            BidMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBidMapResponse };
        message.BidMap = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BidMap.push(BidMap.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBidMapResponse };
        message.BidMap = [];
        if (object.BidMap !== undefined && object.BidMap !== null) {
            for (const e of object.BidMap) {
                message.BidMap.push(BidMap.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.BidMap) {
            obj.BidMap = message.BidMap.map((e) => (e ? BidMap.toJSON(e) : undefined));
        }
        else {
            obj.BidMap = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBidMapResponse };
        message.BidMap = [];
        if (object.BidMap !== undefined && object.BidMap !== null) {
            for (const e of object.BidMap) {
                message.BidMap.push(BidMap.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetResultsMapRequest = { index: '' };
export const QueryGetResultsMapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetResultsMapRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetResultsMapRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetResultsMapRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetResultsMapResponse = {};
export const QueryGetResultsMapResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ResultsMap !== undefined) {
            ResultsMap.encode(message.ResultsMap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetResultsMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ResultsMap = ResultsMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetResultsMapResponse };
        if (object.ResultsMap !== undefined && object.ResultsMap !== null) {
            message.ResultsMap = ResultsMap.fromJSON(object.ResultsMap);
        }
        else {
            message.ResultsMap = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ResultsMap !== undefined && (obj.ResultsMap = message.ResultsMap ? ResultsMap.toJSON(message.ResultsMap) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetResultsMapResponse };
        if (object.ResultsMap !== undefined && object.ResultsMap !== null) {
            message.ResultsMap = ResultsMap.fromPartial(object.ResultsMap);
        }
        else {
            message.ResultsMap = undefined;
        }
        return message;
    }
};
const baseQueryAllResultsMapRequest = {};
export const QueryAllResultsMapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllResultsMapRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllResultsMapRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllResultsMapRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllResultsMapResponse = {};
export const QueryAllResultsMapResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ResultsMap) {
            ResultsMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllResultsMapResponse };
        message.ResultsMap = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ResultsMap.push(ResultsMap.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllResultsMapResponse };
        message.ResultsMap = [];
        if (object.ResultsMap !== undefined && object.ResultsMap !== null) {
            for (const e of object.ResultsMap) {
                message.ResultsMap.push(ResultsMap.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ResultsMap) {
            obj.ResultsMap = message.ResultsMap.map((e) => (e ? ResultsMap.toJSON(e) : undefined));
        }
        else {
            obj.ResultsMap = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllResultsMapResponse };
        message.ResultsMap = [];
        if (object.ResultsMap !== undefined && object.ResultsMap !== null) {
            for (const e of object.ResultsMap) {
                message.ResultsMap.push(ResultsMap.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetBidListRequest = { id: 0 };
export const QueryGetBidListRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBidListRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBidListRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBidListRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetBidListResponse = {};
export const QueryGetBidListResponse = {
    encode(message, writer = Writer.create()) {
        if (message.BidList !== undefined) {
            BidList.encode(message.BidList, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBidListResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BidList = BidList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBidListResponse };
        if (object.BidList !== undefined && object.BidList !== null) {
            message.BidList = BidList.fromJSON(object.BidList);
        }
        else {
            message.BidList = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.BidList !== undefined && (obj.BidList = message.BidList ? BidList.toJSON(message.BidList) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBidListResponse };
        if (object.BidList !== undefined && object.BidList !== null) {
            message.BidList = BidList.fromPartial(object.BidList);
        }
        else {
            message.BidList = undefined;
        }
        return message;
    }
};
const baseQueryAllBidListRequest = {};
export const QueryAllBidListRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBidListRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBidListRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBidListRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllBidListResponse = {};
export const QueryAllBidListResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.BidList) {
            BidList.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBidListResponse };
        message.BidList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BidList.push(BidList.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBidListResponse };
        message.BidList = [];
        if (object.BidList !== undefined && object.BidList !== null) {
            for (const e of object.BidList) {
                message.BidList.push(BidList.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.BidList) {
            obj.BidList = message.BidList.map((e) => (e ? BidList.toJSON(e) : undefined));
        }
        else {
            obj.BidList = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBidListResponse };
        message.BidList = [];
        if (object.BidList !== undefined && object.BidList !== null) {
            for (const e of object.BidList) {
                message.BidList.push(BidList.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetAuctionMapRequest = { index: '' };
export const QueryGetAuctionMapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAuctionMapRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAuctionMapRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAuctionMapRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetAuctionMapResponse = {};
export const QueryGetAuctionMapResponse = {
    encode(message, writer = Writer.create()) {
        if (message.AuctionMap !== undefined) {
            AuctionMap.encode(message.AuctionMap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAuctionMapResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AuctionMap = AuctionMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetAuctionMapResponse };
        if (object.AuctionMap !== undefined && object.AuctionMap !== null) {
            message.AuctionMap = AuctionMap.fromJSON(object.AuctionMap);
        }
        else {
            message.AuctionMap = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.AuctionMap !== undefined && (obj.AuctionMap = message.AuctionMap ? AuctionMap.toJSON(message.AuctionMap) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAuctionMapResponse };
        if (object.AuctionMap !== undefined && object.AuctionMap !== null) {
            message.AuctionMap = AuctionMap.fromPartial(object.AuctionMap);
        }
        else {
            message.AuctionMap = undefined;
        }
        return message;
    }
};
const baseQueryAllAuctionMapRequest = {};
export const QueryAllAuctionMapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllAuctionMapRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllAuctionMapRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllAuctionMapRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllAuctionMapResponse = {};
export const QueryAllAuctionMapResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.AuctionMap) {
            AuctionMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllAuctionMapResponse };
        message.AuctionMap = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AuctionMap.push(AuctionMap.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllAuctionMapResponse };
        message.AuctionMap = [];
        if (object.AuctionMap !== undefined && object.AuctionMap !== null) {
            for (const e of object.AuctionMap) {
                message.AuctionMap.push(AuctionMap.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.AuctionMap) {
            obj.AuctionMap = message.AuctionMap.map((e) => (e ? AuctionMap.toJSON(e) : undefined));
        }
        else {
            obj.AuctionMap = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllAuctionMapResponse };
        message.AuctionMap = [];
        if (object.AuctionMap !== undefined && object.AuctionMap !== null) {
            for (const e of object.AuctionMap) {
                message.AuctionMap.push(AuctionMap.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    BidMap(request) {
        const data = QueryGetBidMapRequest.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Query', 'BidMap', data);
        return promise.then((data) => QueryGetBidMapResponse.decode(new Reader(data)));
    }
    BidMapAll(request) {
        const data = QueryAllBidMapRequest.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Query', 'BidMapAll', data);
        return promise.then((data) => QueryAllBidMapResponse.decode(new Reader(data)));
    }
    ResultsMap(request) {
        const data = QueryGetResultsMapRequest.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Query', 'ResultsMap', data);
        return promise.then((data) => QueryGetResultsMapResponse.decode(new Reader(data)));
    }
    ResultsMapAll(request) {
        const data = QueryAllResultsMapRequest.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Query', 'ResultsMapAll', data);
        return promise.then((data) => QueryAllResultsMapResponse.decode(new Reader(data)));
    }
    BidList(request) {
        const data = QueryGetBidListRequest.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Query', 'BidList', data);
        return promise.then((data) => QueryGetBidListResponse.decode(new Reader(data)));
    }
    BidListAll(request) {
        const data = QueryAllBidListRequest.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Query', 'BidListAll', data);
        return promise.then((data) => QueryAllBidListResponse.decode(new Reader(data)));
    }
    AuctionMap(request) {
        const data = QueryGetAuctionMapRequest.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Query', 'AuctionMap', data);
        return promise.then((data) => QueryGetAuctionMapResponse.decode(new Reader(data)));
    }
    AuctionMapAll(request) {
        const data = QueryAllAuctionMapRequest.encode(request).finish();
        const promise = this.rpc.request('hello.candle.candle.Query', 'AuctionMapAll', data);
        return promise.then((data) => QueryAllAuctionMapResponse.decode(new Reader(data)));
    }
}
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
