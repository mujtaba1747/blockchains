/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'cosmonaut.scavenge.scavenge'

export interface Scavenge {
  creator: string
  index: string
  solutionHash: string
  solution: string
  description: string
  reward: string
  scavenger: string
}

const baseScavenge: object = { creator: '', index: '', solutionHash: '', solution: '', description: '', reward: '', scavenger: '' }

export const Scavenge = {
  encode(message: Scavenge, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.solutionHash !== '') {
      writer.uint32(26).string(message.solutionHash)
    }
    if (message.solution !== '') {
      writer.uint32(34).string(message.solution)
    }
    if (message.description !== '') {
      writer.uint32(42).string(message.description)
    }
    if (message.reward !== '') {
      writer.uint32(50).string(message.reward)
    }
    if (message.scavenger !== '') {
      writer.uint32(58).string(message.scavenger)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Scavenge {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseScavenge } as Scavenge
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.solutionHash = reader.string()
          break
        case 4:
          message.solution = reader.string()
          break
        case 5:
          message.description = reader.string()
          break
        case 6:
          message.reward = reader.string()
          break
        case 7:
          message.scavenger = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Scavenge {
    const message = { ...baseScavenge } as Scavenge
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.solutionHash !== undefined && object.solutionHash !== null) {
      message.solutionHash = String(object.solutionHash)
    } else {
      message.solutionHash = ''
    }
    if (object.solution !== undefined && object.solution !== null) {
      message.solution = String(object.solution)
    } else {
      message.solution = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = String(object.reward)
    } else {
      message.reward = ''
    }
    if (object.scavenger !== undefined && object.scavenger !== null) {
      message.scavenger = String(object.scavenger)
    } else {
      message.scavenger = ''
    }
    return message
  },

  toJSON(message: Scavenge): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.solutionHash !== undefined && (obj.solutionHash = message.solutionHash)
    message.solution !== undefined && (obj.solution = message.solution)
    message.description !== undefined && (obj.description = message.description)
    message.reward !== undefined && (obj.reward = message.reward)
    message.scavenger !== undefined && (obj.scavenger = message.scavenger)
    return obj
  },

  fromPartial(object: DeepPartial<Scavenge>): Scavenge {
    const message = { ...baseScavenge } as Scavenge
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.solutionHash !== undefined && object.solutionHash !== null) {
      message.solutionHash = object.solutionHash
    } else {
      message.solutionHash = ''
    }
    if (object.solution !== undefined && object.solution !== null) {
      message.solution = object.solution
    } else {
      message.solution = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = object.reward
    } else {
      message.reward = ''
    }
    if (object.scavenger !== undefined && object.scavenger !== null) {
      message.scavenger = object.scavenger
    } else {
      message.scavenger = ''
    }
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
