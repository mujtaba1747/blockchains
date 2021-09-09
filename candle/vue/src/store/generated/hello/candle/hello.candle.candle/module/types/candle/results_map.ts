/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'hello.candle.candle'

export interface ResultsMap {
  creator: string
  index: string
  winner: string
  bidId: string
  endHeight: number
}

const baseResultsMap: object = { creator: '', index: '', winner: '', bidId: '', endHeight: 0 }

export const ResultsMap = {
  encode(message: ResultsMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.winner !== '') {
      writer.uint32(26).string(message.winner)
    }
    if (message.bidId !== '') {
      writer.uint32(34).string(message.bidId)
    }
    if (message.endHeight !== 0) {
      writer.uint32(40).int64(message.endHeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ResultsMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseResultsMap } as ResultsMap
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
          message.winner = reader.string()
          break
        case 4:
          message.bidId = reader.string()
          break
        case 5:
          message.endHeight = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ResultsMap {
    const message = { ...baseResultsMap } as ResultsMap
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
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = String(object.winner)
    } else {
      message.winner = ''
    }
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = String(object.bidId)
    } else {
      message.bidId = ''
    }
    if (object.endHeight !== undefined && object.endHeight !== null) {
      message.endHeight = Number(object.endHeight)
    } else {
      message.endHeight = 0
    }
    return message
  },

  toJSON(message: ResultsMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.winner !== undefined && (obj.winner = message.winner)
    message.bidId !== undefined && (obj.bidId = message.bidId)
    message.endHeight !== undefined && (obj.endHeight = message.endHeight)
    return obj
  },

  fromPartial(object: DeepPartial<ResultsMap>): ResultsMap {
    const message = { ...baseResultsMap } as ResultsMap
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
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner
    } else {
      message.winner = ''
    }
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = object.bidId
    } else {
      message.bidId = ''
    }
    if (object.endHeight !== undefined && object.endHeight !== null) {
      message.endHeight = object.endHeight
    } else {
      message.endHeight = 0
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
