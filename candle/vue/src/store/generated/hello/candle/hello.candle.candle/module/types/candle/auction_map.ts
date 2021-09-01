/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'hello.candle.candle'

export interface AuctionMap {
  creator: string
  index: string
  blockHeight: number
  deadline: number
}

const baseAuctionMap: object = { creator: '', index: '', blockHeight: 0, deadline: 0 }

export const AuctionMap = {
  encode(message: AuctionMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.blockHeight !== 0) {
      writer.uint32(24).uint64(message.blockHeight)
    }
    if (message.deadline !== 0) {
      writer.uint32(32).uint64(message.deadline)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): AuctionMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAuctionMap } as AuctionMap
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
          message.blockHeight = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.deadline = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AuctionMap {
    const message = { ...baseAuctionMap } as AuctionMap
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight)
    } else {
      message.blockHeight = 0
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline)
    } else {
      message.deadline = 0
    }
    return message
  },

  toJSON(message: AuctionMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    message.deadline !== undefined && (obj.deadline = message.deadline)
    return obj
  },

  fromPartial(object: DeepPartial<AuctionMap>): AuctionMap {
    const message = { ...baseAuctionMap } as AuctionMap
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight
    } else {
      message.blockHeight = 0
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline
    } else {
      message.deadline = 0
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
