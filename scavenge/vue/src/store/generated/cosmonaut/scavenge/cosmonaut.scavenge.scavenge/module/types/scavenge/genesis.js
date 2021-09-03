/* eslint-disable */
import { Commit } from '../scavenge/commit';
import { Scavenge } from '../scavenge/scavenge';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.scavenge.scavenge';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.commitList) {
            Commit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.scavengeList) {
            Scavenge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.commitList = [];
        message.scavengeList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.commitList.push(Commit.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.scavengeList.push(Scavenge.decode(reader, reader.uint32()));
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
        message.commitList = [];
        message.scavengeList = [];
        if (object.commitList !== undefined && object.commitList !== null) {
            for (const e of object.commitList) {
                message.commitList.push(Commit.fromJSON(e));
            }
        }
        if (object.scavengeList !== undefined && object.scavengeList !== null) {
            for (const e of object.scavengeList) {
                message.scavengeList.push(Scavenge.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.commitList) {
            obj.commitList = message.commitList.map((e) => (e ? Commit.toJSON(e) : undefined));
        }
        else {
            obj.commitList = [];
        }
        if (message.scavengeList) {
            obj.scavengeList = message.scavengeList.map((e) => (e ? Scavenge.toJSON(e) : undefined));
        }
        else {
            obj.scavengeList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.commitList = [];
        message.scavengeList = [];
        if (object.commitList !== undefined && object.commitList !== null) {
            for (const e of object.commitList) {
                message.commitList.push(Commit.fromPartial(e));
            }
        }
        if (object.scavengeList !== undefined && object.scavengeList !== null) {
            for (const e of object.scavengeList) {
                message.scavengeList.push(Scavenge.fromPartial(e));
            }
        }
        return message;
    }
};
