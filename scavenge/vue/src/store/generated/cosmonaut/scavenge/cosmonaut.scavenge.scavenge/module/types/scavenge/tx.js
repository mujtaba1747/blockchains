/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
export const protobufPackage = 'cosmonaut.scavenge.scavenge';
const baseMsgRevealSolution = { creator: '', solution: '' };
export const MsgRevealSolution = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.solution !== '') {
            writer.uint32(18).string(message.solution);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRevealSolution };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.solution = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRevealSolution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.solution !== undefined && object.solution !== null) {
            message.solution = String(object.solution);
        }
        else {
            message.solution = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.solution !== undefined && (obj.solution = message.solution);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRevealSolution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.solution !== undefined && object.solution !== null) {
            message.solution = object.solution;
        }
        else {
            message.solution = '';
        }
        return message;
    }
};
const baseMsgRevealSolutionResponse = {};
export const MsgRevealSolutionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRevealSolutionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgRevealSolutionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRevealSolutionResponse };
        return message;
    }
};
const baseMsgCommitSolution = { creator: '', solutionHash: '', solutionScavengerHash: '' };
export const MsgCommitSolution = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.solutionHash !== '') {
            writer.uint32(18).string(message.solutionHash);
        }
        if (message.solutionScavengerHash !== '') {
            writer.uint32(26).string(message.solutionScavengerHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCommitSolution };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.solutionHash = reader.string();
                    break;
                case 3:
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
        const message = { ...baseMsgCommitSolution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
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
        message.solutionHash !== undefined && (obj.solutionHash = message.solutionHash);
        message.solutionScavengerHash !== undefined && (obj.solutionScavengerHash = message.solutionScavengerHash);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCommitSolution };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
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
const baseMsgCommitSolutionResponse = {};
export const MsgCommitSolutionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCommitSolutionResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCommitSolutionResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCommitSolutionResponse };
        return message;
    }
};
const baseMsgSubmitScavenge = { creator: '', solutionHash: '', description: '', reward: '' };
export const MsgSubmitScavenge = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.solutionHash !== '') {
            writer.uint32(18).string(message.solutionHash);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.reward !== '') {
            writer.uint32(34).string(message.reward);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSubmitScavenge };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.solutionHash = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.reward = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSubmitScavenge };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.solutionHash !== undefined && object.solutionHash !== null) {
            message.solutionHash = String(object.solutionHash);
        }
        else {
            message.solutionHash = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = String(object.reward);
        }
        else {
            message.reward = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.solutionHash !== undefined && (obj.solutionHash = message.solutionHash);
        message.description !== undefined && (obj.description = message.description);
        message.reward !== undefined && (obj.reward = message.reward);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSubmitScavenge };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.solutionHash !== undefined && object.solutionHash !== null) {
            message.solutionHash = object.solutionHash;
        }
        else {
            message.solutionHash = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = object.reward;
        }
        else {
            message.reward = '';
        }
        return message;
    }
};
const baseMsgSubmitScavengeResponse = {};
export const MsgSubmitScavengeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSubmitScavengeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSubmitScavengeResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSubmitScavengeResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RevealSolution(request) {
        const data = MsgRevealSolution.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Msg', 'RevealSolution', data);
        return promise.then((data) => MsgRevealSolutionResponse.decode(new Reader(data)));
    }
    CommitSolution(request) {
        const data = MsgCommitSolution.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Msg', 'CommitSolution', data);
        return promise.then((data) => MsgCommitSolutionResponse.decode(new Reader(data)));
    }
    SubmitScavenge(request) {
        const data = MsgSubmitScavenge.encode(request).finish();
        const promise = this.rpc.request('cosmonaut.scavenge.scavenge.Msg', 'SubmitScavenge', data);
        return promise.then((data) => MsgSubmitScavengeResponse.decode(new Reader(data)));
    }
}
