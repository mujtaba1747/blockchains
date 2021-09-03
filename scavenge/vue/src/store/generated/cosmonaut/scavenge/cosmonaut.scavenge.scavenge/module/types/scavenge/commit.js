/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.scavenge.scavenge';
const baseCommit = { creator: '', index: '', solutionHash: '', solutionScavengerHash: '' };
export const Commit = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.index !== '') {
            writer.uint32(18).string(message.index);
        }
        if (message.solutionHash !== '') {
            writer.uint32(26).string(message.solutionHash);
        }
        if (message.solutionScavengerHash !== '') {
            writer.uint32(34).string(message.solutionScavengerHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCommit };
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
                    message.solutionHash = reader.string();
                    break;
                case 4:
                    message.solutionScavengerHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCommit };
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
        if (object.solutionHash !== undefined && object.solutionHash !== null) {
            message.solutionHash = String(object.solutionHash);
        }
        else {
            message.solutionHash = '';
        }
        if (object.solutionScavengerHash !== undefined && object.solutionScavengerHash !== null) {
            message.solutionScavengerHash = String(object.solutionScavengerHash);
        }
        else {
            message.solutionScavengerHash = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.index !== undefined && (obj.index = message.index);
        message.solutionHash !== undefined && (obj.solutionHash = message.solutionHash);
        message.solutionScavengerHash !== undefined && (obj.solutionScavengerHash = message.solutionScavengerHash);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCommit };
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
        if (object.solutionHash !== undefined && object.solutionHash !== null) {
            message.solutionHash = object.solutionHash;
        }
        else {
            message.solutionHash = '';
        }
        if (object.solutionScavengerHash !== undefined && object.solutionScavengerHash !== null) {
            message.solutionScavengerHash = object.solutionScavengerHash;
        }
        else {
            message.solutionScavengerHash = '';
        }
        return message;
    }
};
