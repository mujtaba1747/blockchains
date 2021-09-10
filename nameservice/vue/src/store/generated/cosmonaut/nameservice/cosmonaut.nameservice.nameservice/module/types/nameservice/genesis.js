/* eslint-disable */
import { Whois, Params } from '../nameservice/whois';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.nameservice.nameservice';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.whoisList) {
            Whois.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.Params !== undefined) {
            Params.encode(message.Params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.whoisList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.whoisList.push(Whois.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.Params = Params.decode(reader, reader.uint32());
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
        message.whoisList = [];
        if (object.whoisList !== undefined && object.whoisList !== null) {
            for (const e of object.whoisList) {
                message.whoisList.push(Whois.fromJSON(e));
            }
        }
        if (object.Params !== undefined && object.Params !== null) {
            message.Params = Params.fromJSON(object.Params);
        }
        else {
            message.Params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.whoisList) {
            obj.whoisList = message.whoisList.map((e) => (e ? Whois.toJSON(e) : undefined));
        }
        else {
            obj.whoisList = [];
        }
        message.Params !== undefined && (obj.Params = message.Params ? Params.toJSON(message.Params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.whoisList = [];
        if (object.whoisList !== undefined && object.whoisList !== null) {
            for (const e of object.whoisList) {
                message.whoisList.push(Whois.fromPartial(e));
            }
        }
        if (object.Params !== undefined && object.Params !== null) {
            message.Params = Params.fromPartial(object.Params);
        }
        else {
            message.Params = undefined;
        }
        return message;
    }
};
