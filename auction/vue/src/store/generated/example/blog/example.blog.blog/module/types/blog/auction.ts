/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'example.blog.blog'

/** proto/blog/auction.proto */

export interface Auction {
  creator: string
  id: string
  title: string
  body: string
  deadline: number
  blockHeight: number
}

export interface MsgCreateAuction {
  creator: string
  title: string
  body: string
  deadline: number
  blockHeight: number
}

export interface Bid {
  creator: string
  id: string
  auctionId: string
  amt: number
}

export interface MsgCreateBid {
  creator: string
  auctionId: string
  amt: number
}

const baseAuction: object = { creator: '', id: '', title: '', body: '', deadline: 0, blockHeight: 0 }

export const Auction = {
  encode(message: Auction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    if (message.title !== '') {
      writer.uint32(26).string(message.title)
    }
    if (message.body !== '') {
      writer.uint32(34).string(message.body)
    }
    if (message.deadline !== 0) {
      writer.uint32(40).int64(message.deadline)
    }
    if (message.blockHeight !== 0) {
      writer.uint32(48).int64(message.blockHeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Auction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAuction } as Auction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.string()
          break
        case 3:
          message.title = reader.string()
          break
        case 4:
          message.body = reader.string()
          break
        case 5:
          message.deadline = longToNumber(reader.int64() as Long)
          break
        case 6:
          message.blockHeight = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Auction {
    const message = { ...baseAuction } as Auction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body)
    } else {
      message.body = ''
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline)
    } else {
      message.deadline = 0
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight)
    } else {
      message.blockHeight = 0
    }
    return message
  },

  toJSON(message: Auction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.title !== undefined && (obj.title = message.title)
    message.body !== undefined && (obj.body = message.body)
    message.deadline !== undefined && (obj.deadline = message.deadline)
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    return obj
  },

  fromPartial(object: DeepPartial<Auction>): Auction {
    const message = { ...baseAuction } as Auction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body
    } else {
      message.body = ''
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline
    } else {
      message.deadline = 0
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight
    } else {
      message.blockHeight = 0
    }
    return message
  }
}

const baseMsgCreateAuction: object = { creator: '', title: '', body: '', deadline: 0, blockHeight: 0 }

export const MsgCreateAuction = {
  encode(message: MsgCreateAuction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.title !== '') {
      writer.uint32(18).string(message.title)
    }
    if (message.body !== '') {
      writer.uint32(26).string(message.body)
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int64(message.deadline)
    }
    if (message.blockHeight !== 0) {
      writer.uint32(40).int64(message.blockHeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAuction } as MsgCreateAuction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.title = reader.string()
          break
        case 3:
          message.body = reader.string()
          break
        case 4:
          message.deadline = longToNumber(reader.int64() as Long)
          break
        case 5:
          message.blockHeight = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateAuction {
    const message = { ...baseMsgCreateAuction } as MsgCreateAuction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body)
    } else {
      message.body = ''
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline)
    } else {
      message.deadline = 0
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight)
    } else {
      message.blockHeight = 0
    }
    return message
  },

  toJSON(message: MsgCreateAuction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.title !== undefined && (obj.title = message.title)
    message.body !== undefined && (obj.body = message.body)
    message.deadline !== undefined && (obj.deadline = message.deadline)
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateAuction>): MsgCreateAuction {
    const message = { ...baseMsgCreateAuction } as MsgCreateAuction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body
    } else {
      message.body = ''
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline
    } else {
      message.deadline = 0
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight
    } else {
      message.blockHeight = 0
    }
    return message
  }
}

const baseBid: object = { creator: '', id: '', auctionId: '', amt: 0 }

export const Bid = {
  encode(message: Bid, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    if (message.auctionId !== '') {
      writer.uint32(26).string(message.auctionId)
    }
    if (message.amt !== 0) {
      writer.uint32(32).int64(message.amt)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBid } as Bid
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.string()
          break
        case 3:
          message.auctionId = reader.string()
          break
        case 4:
          message.amt = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Bid {
    const message = { ...baseBid } as Bid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = String(object.auctionId)
    } else {
      message.auctionId = ''
    }
    if (object.amt !== undefined && object.amt !== null) {
      message.amt = Number(object.amt)
    } else {
      message.amt = 0
    }
    return message
  },

  toJSON(message: Bid): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    message.amt !== undefined && (obj.amt = message.amt)
    return obj
  },

  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = { ...baseBid } as Bid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId
    } else {
      message.auctionId = ''
    }
    if (object.amt !== undefined && object.amt !== null) {
      message.amt = object.amt
    } else {
      message.amt = 0
    }
    return message
  }
}

const baseMsgCreateBid: object = { creator: '', auctionId: '', amt: 0 }

export const MsgCreateBid = {
  encode(message: MsgCreateBid, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.auctionId !== '') {
      writer.uint32(18).string(message.auctionId)
    }
    if (message.amt !== 0) {
      writer.uint32(24).int64(message.amt)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBid } as MsgCreateBid
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.auctionId = reader.string()
          break
        case 3:
          message.amt = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBid {
    const message = { ...baseMsgCreateBid } as MsgCreateBid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = String(object.auctionId)
    } else {
      message.auctionId = ''
    }
    if (object.amt !== undefined && object.amt !== null) {
      message.amt = Number(object.amt)
    } else {
      message.amt = 0
    }
    return message
  },

  toJSON(message: MsgCreateBid): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    message.amt !== undefined && (obj.amt = message.amt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid {
    const message = { ...baseMsgCreateBid } as MsgCreateBid
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId
    } else {
      message.auctionId = ''
    }
    if (object.amt !== undefined && object.amt !== null) {
      message.amt = object.amt
    } else {
      message.amt = 0
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
