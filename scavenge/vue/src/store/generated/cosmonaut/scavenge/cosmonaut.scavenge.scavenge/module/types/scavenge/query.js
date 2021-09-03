/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Commit } from '../scavenge/commit';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Scavenge } from '../scavenge/scavenge';
export const protobufPackage = 'cosmonaut.scavenge.scavenge';
const baseQueryGetCommitRequest = { index: '' };
export const QueryGetCommitRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCommitRequest };
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
        const message = { ...baseQueryGetCommitRequest };
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
        const message = { ...baseQueryGetCommitRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetCommitResponse = {};
export const QueryGetCommitResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Commit !== undefined) {
            Commit.encode(message.Commit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCommitResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Commit = Commit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCommitResponse };
        if (object.Commit !== undefined && object.Commit !== null) {
            message.Commit = Commit.fromJSON(object.Commit);
        }
        else {
            message.Commit = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Commit !== undefined && (obj.Commit = message.Commit ? Commit.toJSON(message.Commit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCommitResponse };
        if (object.Commit !== undefined && object.Commit !== null) {
            message.Commit = Commit.fromPartial(object.Commit);
        }
        else {
            message.Commit = undefined;
        }
        return message;
    }
};
const baseQueryAllCommitRequest = {};
export const QueryAllCommitRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCommitRequest };
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
        const message = { ...baseQueryAllCommitRequest };
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
        const message = { ...baseQueryAllCommitRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCommitResponse = {};
export const QueryAllCommitResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Commit) {
            Commit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCommitResponse };
        message.Commit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Commit.push(Commit.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllCommitResponse };
        message.Commit = [];
        if (object.Commit !== undefined && object.Commit !== null) {
            for (const e of object.Commit) {
                message.Commit.push(Commit.fromJSON(e));
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
        if (message.Commit) {
            obj.Commit = message.Commit.map((e) => (e ? Commit.toJSON(e) : undefined));
        }
        else {
            obj.Commit = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCommitResponse };
        message.Commit = [];
        if (object.Commit !== undefined && object.Commit !== null) {
            for (const e of object.Commit) {
                message.Commit.push(Commit.fromPartial(e));
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
const baseQueryGetScavengeRequest = { index: '' };
export const QueryGetScavengeRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetScavengeRequest };
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
        const message = { ...baseQueryGetScavengeRequest };
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
        const message = { ...baseQueryGetScavengeRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetScavengeResponse = {};
export const QueryGetScavengeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Scavenge !== undefined) {
            Scavenge.encode(message.Scavenge, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetScavengeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Scavenge = Scavenge.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetScavengeResponse };
        if (object.Scavenge !== undefined && object.Scavenge !== null) {
            message.Scavenge = Scavenge.fromJSON(object.Scavenge);
        }
        else {
            message.Scavenge = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Scavenge !== undefined && (obj.Scavenge = message.Scavenge ? Scavenge.toJSON(message.Scavenge) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetScavengeResponse };
        if (object.Scavenge !== undefined && object.Scavenge !== null) {
            message.Scavenge = Scavenge.fromPartial(object.Scavenge);
        }
        else {
            message.Scavenge = undefined;
        }
        return message;
    }
};
const baseQueryAllScavengeRequest = {};
export const QueryAllScavengeRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllScavengeRequest };
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
        const message = { ...baseQueryAllScavengeRequest };
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
        const message = { ...baseQueryAllScavengeRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllScavengeResponse = {};
export const QueryAllScavengeResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Scavenge) {
            Scavenge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllScavengeResponse };
        message.Scavenge = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Scavenge.push(Scavenge.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllScavengeResponse };
        message.Scavenge = [];
        if (object.Scavenge !== undefined && object.Scavenge !== null) {
            for (const e of object.Scavenge) {
                message.Scavenge.push(Scavenge.fromJSON(e));
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
        if (message.Scavenge) {
            obj.Scavenge = message.Scavenge.map((e) => (e ? Scavenge.toJSON(e) : undefined));
        }
        else {
            obj.Scavenge = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllScavengeResponse };
        message.Scavenge = [];
        if (object.Scavenge !== undefined && object.Scavenge !== null) {
            for (const e of object.Scavenge) {
                message.Scavenge.push(Scavenge.fromPartial(e));
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
    Commit(request) {
        const data = QueryGetCommitRequest.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Query', 'Commit', data);
        return promise.then((data) => QueryGetCommitResponse.decode(new Reader(data)));
    }
    CommitAll(request) {
        const data = QueryAllCommitRequest.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Query', 'CommitAll', data);
        return promise.then((data) => QueryAllCommitResponse.decode(new Reader(data)));
    }
    Scavenge(request) {
        const data = QueryGetScavengeRequest.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Query', 'Scavenge', data);
        return promise.then((data) => QueryGetScavengeResponse.decode(new Reader(data)));
    }
    ScavengeAll(request) {
        const data = QueryAllScavengeRequest.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Query', 'ScavengeAll', data);
        return promise.then((data) => QueryAllScavengeResponse.decode(new Reader(data)));
    }
}
