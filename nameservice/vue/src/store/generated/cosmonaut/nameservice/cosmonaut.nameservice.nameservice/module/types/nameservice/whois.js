/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.nameservice.nameservice';
const baseWhois = { creator: '', index: '', name: '', value: '', price: '', createHt: '', expiry: '' };
export const Whois = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.value !== '') {
            writer.uint32(34).string(message.value);
        }
        if (message.price !== '') {
            writer.uint32(42).string(message.price);
        }
        if (message.createHt !== '') {
            writer.uint32(50).string(message.createHt);
        }
        if (message.expiry !== '') {
            writer.uint32(58).string(message.expiry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWhois };
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
                    message.name = reader.string();
                    break;
                case 4:
                    message.value = reader.string();
                    break;
                case 5:
                    message.price = reader.string();
                    break;
                case 6:
                    message.createHt = reader.string();
                    break;
                case 7:
                    message.expiry = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWhois };
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = '';
        }
        if (object.createHt !== undefined && object.createHt !== null) {
            message.createHt = String(object.createHt);
        }
        else {
            message.createHt = '';
        }
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = String(object.expiry);
        }
        else {
            message.expiry = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.name !== undefined && (obj.name = message.name);
        message.value !== undefined && (obj.value = message.value);
        message.price !== undefined && (obj.price = message.price);
        message.createHt !== undefined && (obj.createHt = message.createHt);
        message.expiry !== undefined && (obj.expiry = message.expiry);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWhois };
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
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = '';
        }
        if (object.createHt !== undefined && object.createHt !== null) {
            message.createHt = object.createHt;
        }
        else {
            message.createHt = '';
        }
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = object.expiry;
        }
        else {
            message.expiry = '';
        }
        return message;
    }
};
