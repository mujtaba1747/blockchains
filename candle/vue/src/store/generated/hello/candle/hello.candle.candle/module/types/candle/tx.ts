/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'hello.candle.candle'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateBidMap {
  creator: string
  index: string
  auctionId: string
  amt: number
  blockHeight: number
}

export interface MsgCreateBidMapResponse {}

export interface MsgUpdateBidMap {
  creator: string
  index: string
  auctionId: string
  amt: number
  blockHeight: number
}

export interface MsgUpdateBidMapResponse {}

export interface MsgDeleteBidMap {
  creator: string
  index: string
}

export interface MsgDeleteBidMapResponse {}

export interface MsgCreateResultsMap {
  creator: string
  index: string
  winner: string
  bidId: string
}

export interface MsgCreateResultsMapResponse {}

export interface MsgUpdateResultsMap {
  creator: string
  index: string
  winner: string
  bidId: string
}

export interface MsgUpdateResultsMapResponse {}

export interface MsgDeleteResultsMap {
  creator: string
  index: string
}

export interface MsgDeleteResultsMapResponse {}

export interface MsgCreateBidList {
  creator: string
  auctionId: string
  amt: number
}

export interface MsgCreateBidListResponse {
  id: number
}

export interface MsgUpdateBidList {
  creator: string
  id: number
  auctionId: string
  amt: number
}

export interface MsgUpdateBidListResponse {}

export interface MsgDeleteBidList {
  creator: string
  id: number
}

export interface MsgDeleteBidListResponse {}

export interface MsgCreateAuctionMap {
  creator: string
  index: string
  blockHeight: number
  deadline: number
}

export interface MsgCreateAuctionMapResponse {}

export interface MsgUpdateAuctionMap {
  creator: string
  index: string
  blockHeight: number
  deadline: number
}

export interface MsgUpdateAuctionMapResponse {}

export interface MsgDeleteAuctionMap {
  creator: string
  index: string
}

export interface MsgDeleteAuctionMapResponse {}

export interface MsgFinalizeAuction {
  creator: string
  auctionId: string
}

export interface MsgFinalizeAuctionResponse {}

export interface MsgCreateBid {
  creator: string
  auctionId: string
  amt: number
}

export interface MsgCreateBidResponse {}

export interface MsgCreateAuction {
  creator: string
  title: string
}

export interface MsgCreateAuctionResponse {}

const baseMsgCreateBidMap: object = { creator: '', index: '', auctionId: '', amt: 0, blockHeight: 0 }

export const MsgCreateBidMap = {
  encode(message: MsgCreateBidMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.auctionId !== '') {
      writer.uint32(26).string(message.auctionId)
    }
    if (message.amt !== 0) {
      writer.uint32(32).uint64(message.amt)
    }
    if (message.blockHeight !== 0) {
      writer.uint32(40).int64(message.blockHeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBidMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBidMap } as MsgCreateBidMap
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
          message.auctionId = reader.string()
          break
        case 4:
          message.amt = longToNumber(reader.uint64() as Long)
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

  fromJSON(object: any): MsgCreateBidMap {
    const message = { ...baseMsgCreateBidMap } as MsgCreateBidMap
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight)
    } else {
      message.blockHeight = 0
    }
    return message
  },

  toJSON(message: MsgCreateBidMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    message.amt !== undefined && (obj.amt = message.amt)
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBidMap>): MsgCreateBidMap {
    const message = { ...baseMsgCreateBidMap } as MsgCreateBidMap
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight
    } else {
      message.blockHeight = 0
    }
    return message
  }
}

const baseMsgCreateBidMapResponse: object = {}

export const MsgCreateBidMapResponse = {
  encode(_: MsgCreateBidMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBidMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBidMapResponse } as MsgCreateBidMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateBidMapResponse {
    const message = { ...baseMsgCreateBidMapResponse } as MsgCreateBidMapResponse
    return message
  },

  toJSON(_: MsgCreateBidMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateBidMapResponse>): MsgCreateBidMapResponse {
    const message = { ...baseMsgCreateBidMapResponse } as MsgCreateBidMapResponse
    return message
  }
}

const baseMsgUpdateBidMap: object = { creator: '', index: '', auctionId: '', amt: 0, blockHeight: 0 }

export const MsgUpdateBidMap = {
  encode(message: MsgUpdateBidMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.auctionId !== '') {
      writer.uint32(26).string(message.auctionId)
    }
    if (message.amt !== 0) {
      writer.uint32(32).uint64(message.amt)
    }
    if (message.blockHeight !== 0) {
      writer.uint32(40).int64(message.blockHeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBidMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBidMap } as MsgUpdateBidMap
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
          message.auctionId = reader.string()
          break
        case 4:
          message.amt = longToNumber(reader.uint64() as Long)
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

  fromJSON(object: any): MsgUpdateBidMap {
    const message = { ...baseMsgUpdateBidMap } as MsgUpdateBidMap
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight)
    } else {
      message.blockHeight = 0
    }
    return message
  },

  toJSON(message: MsgUpdateBidMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    message.amt !== undefined && (obj.amt = message.amt)
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateBidMap>): MsgUpdateBidMap {
    const message = { ...baseMsgUpdateBidMap } as MsgUpdateBidMap
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight
    } else {
      message.blockHeight = 0
    }
    return message
  }
}

const baseMsgUpdateBidMapResponse: object = {}

export const MsgUpdateBidMapResponse = {
  encode(_: MsgUpdateBidMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBidMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBidMapResponse } as MsgUpdateBidMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateBidMapResponse {
    const message = { ...baseMsgUpdateBidMapResponse } as MsgUpdateBidMapResponse
    return message
  },

  toJSON(_: MsgUpdateBidMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateBidMapResponse>): MsgUpdateBidMapResponse {
    const message = { ...baseMsgUpdateBidMapResponse } as MsgUpdateBidMapResponse
    return message
  }
}

const baseMsgDeleteBidMap: object = { creator: '', index: '' }

export const MsgDeleteBidMap = {
  encode(message: MsgDeleteBidMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBidMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBidMap } as MsgDeleteBidMap
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteBidMap {
    const message = { ...baseMsgDeleteBidMap } as MsgDeleteBidMap
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
    return message
  },

  toJSON(message: MsgDeleteBidMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteBidMap>): MsgDeleteBidMap {
    const message = { ...baseMsgDeleteBidMap } as MsgDeleteBidMap
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
    return message
  }
}

const baseMsgDeleteBidMapResponse: object = {}

export const MsgDeleteBidMapResponse = {
  encode(_: MsgDeleteBidMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBidMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBidMapResponse } as MsgDeleteBidMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteBidMapResponse {
    const message = { ...baseMsgDeleteBidMapResponse } as MsgDeleteBidMapResponse
    return message
  },

  toJSON(_: MsgDeleteBidMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteBidMapResponse>): MsgDeleteBidMapResponse {
    const message = { ...baseMsgDeleteBidMapResponse } as MsgDeleteBidMapResponse
    return message
  }
}

const baseMsgCreateResultsMap: object = { creator: '', index: '', winner: '', bidId: '' }

export const MsgCreateResultsMap = {
  encode(message: MsgCreateResultsMap, writer: Writer = Writer.create()): Writer {
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
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateResultsMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateResultsMap } as MsgCreateResultsMap
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
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateResultsMap {
    const message = { ...baseMsgCreateResultsMap } as MsgCreateResultsMap
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
    return message
  },

  toJSON(message: MsgCreateResultsMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.winner !== undefined && (obj.winner = message.winner)
    message.bidId !== undefined && (obj.bidId = message.bidId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateResultsMap>): MsgCreateResultsMap {
    const message = { ...baseMsgCreateResultsMap } as MsgCreateResultsMap
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
    return message
  }
}

const baseMsgCreateResultsMapResponse: object = {}

export const MsgCreateResultsMapResponse = {
  encode(_: MsgCreateResultsMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateResultsMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateResultsMapResponse } as MsgCreateResultsMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateResultsMapResponse {
    const message = { ...baseMsgCreateResultsMapResponse } as MsgCreateResultsMapResponse
    return message
  },

  toJSON(_: MsgCreateResultsMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateResultsMapResponse>): MsgCreateResultsMapResponse {
    const message = { ...baseMsgCreateResultsMapResponse } as MsgCreateResultsMapResponse
    return message
  }
}

const baseMsgUpdateResultsMap: object = { creator: '', index: '', winner: '', bidId: '' }

export const MsgUpdateResultsMap = {
  encode(message: MsgUpdateResultsMap, writer: Writer = Writer.create()): Writer {
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
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateResultsMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateResultsMap } as MsgUpdateResultsMap
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
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateResultsMap {
    const message = { ...baseMsgUpdateResultsMap } as MsgUpdateResultsMap
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
    return message
  },

  toJSON(message: MsgUpdateResultsMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.winner !== undefined && (obj.winner = message.winner)
    message.bidId !== undefined && (obj.bidId = message.bidId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateResultsMap>): MsgUpdateResultsMap {
    const message = { ...baseMsgUpdateResultsMap } as MsgUpdateResultsMap
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
    return message
  }
}

const baseMsgUpdateResultsMapResponse: object = {}

export const MsgUpdateResultsMapResponse = {
  encode(_: MsgUpdateResultsMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateResultsMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateResultsMapResponse } as MsgUpdateResultsMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateResultsMapResponse {
    const message = { ...baseMsgUpdateResultsMapResponse } as MsgUpdateResultsMapResponse
    return message
  },

  toJSON(_: MsgUpdateResultsMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateResultsMapResponse>): MsgUpdateResultsMapResponse {
    const message = { ...baseMsgUpdateResultsMapResponse } as MsgUpdateResultsMapResponse
    return message
  }
}

const baseMsgDeleteResultsMap: object = { creator: '', index: '' }

export const MsgDeleteResultsMap = {
  encode(message: MsgDeleteResultsMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteResultsMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteResultsMap } as MsgDeleteResultsMap
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteResultsMap {
    const message = { ...baseMsgDeleteResultsMap } as MsgDeleteResultsMap
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
    return message
  },

  toJSON(message: MsgDeleteResultsMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteResultsMap>): MsgDeleteResultsMap {
    const message = { ...baseMsgDeleteResultsMap } as MsgDeleteResultsMap
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
    return message
  }
}

const baseMsgDeleteResultsMapResponse: object = {}

export const MsgDeleteResultsMapResponse = {
  encode(_: MsgDeleteResultsMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteResultsMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteResultsMapResponse } as MsgDeleteResultsMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteResultsMapResponse {
    const message = { ...baseMsgDeleteResultsMapResponse } as MsgDeleteResultsMapResponse
    return message
  },

  toJSON(_: MsgDeleteResultsMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteResultsMapResponse>): MsgDeleteResultsMapResponse {
    const message = { ...baseMsgDeleteResultsMapResponse } as MsgDeleteResultsMapResponse
    return message
  }
}

const baseMsgCreateBidList: object = { creator: '', auctionId: '', amt: 0 }

export const MsgCreateBidList = {
  encode(message: MsgCreateBidList, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.auctionId !== '') {
      writer.uint32(18).string(message.auctionId)
    }
    if (message.amt !== 0) {
      writer.uint32(24).uint64(message.amt)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBidList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBidList } as MsgCreateBidList
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
          message.amt = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBidList {
    const message = { ...baseMsgCreateBidList } as MsgCreateBidList
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

  toJSON(message: MsgCreateBidList): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    message.amt !== undefined && (obj.amt = message.amt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBidList>): MsgCreateBidList {
    const message = { ...baseMsgCreateBidList } as MsgCreateBidList
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

const baseMsgCreateBidListResponse: object = { id: 0 }

export const MsgCreateBidListResponse = {
  encode(message: MsgCreateBidListResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBidListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBidListResponse } as MsgCreateBidListResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateBidListResponse {
    const message = { ...baseMsgCreateBidListResponse } as MsgCreateBidListResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateBidListResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateBidListResponse>): MsgCreateBidListResponse {
    const message = { ...baseMsgCreateBidListResponse } as MsgCreateBidListResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateBidList: object = { creator: '', id: 0, auctionId: '', amt: 0 }

export const MsgUpdateBidList = {
  encode(message: MsgUpdateBidList, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.auctionId !== '') {
      writer.uint32(26).string(message.auctionId)
    }
    if (message.amt !== 0) {
      writer.uint32(32).uint64(message.amt)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBidList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBidList } as MsgUpdateBidList
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.auctionId = reader.string()
          break
        case 4:
          message.amt = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateBidList {
    const message = { ...baseMsgUpdateBidList } as MsgUpdateBidList
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
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

  toJSON(message: MsgUpdateBidList): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    message.amt !== undefined && (obj.amt = message.amt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateBidList>): MsgUpdateBidList {
    const message = { ...baseMsgUpdateBidList } as MsgUpdateBidList
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
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

const baseMsgUpdateBidListResponse: object = {}

export const MsgUpdateBidListResponse = {
  encode(_: MsgUpdateBidListResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBidListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBidListResponse } as MsgUpdateBidListResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateBidListResponse {
    const message = { ...baseMsgUpdateBidListResponse } as MsgUpdateBidListResponse
    return message
  },

  toJSON(_: MsgUpdateBidListResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateBidListResponse>): MsgUpdateBidListResponse {
    const message = { ...baseMsgUpdateBidListResponse } as MsgUpdateBidListResponse
    return message
  }
}

const baseMsgDeleteBidList: object = { creator: '', id: 0 }

export const MsgDeleteBidList = {
  encode(message: MsgDeleteBidList, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBidList {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBidList } as MsgDeleteBidList
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteBidList {
    const message = { ...baseMsgDeleteBidList } as MsgDeleteBidList
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteBidList): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteBidList>): MsgDeleteBidList {
    const message = { ...baseMsgDeleteBidList } as MsgDeleteBidList
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteBidListResponse: object = {}

export const MsgDeleteBidListResponse = {
  encode(_: MsgDeleteBidListResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBidListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteBidListResponse } as MsgDeleteBidListResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteBidListResponse {
    const message = { ...baseMsgDeleteBidListResponse } as MsgDeleteBidListResponse
    return message
  },

  toJSON(_: MsgDeleteBidListResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteBidListResponse>): MsgDeleteBidListResponse {
    const message = { ...baseMsgDeleteBidListResponse } as MsgDeleteBidListResponse
    return message
  }
}

const baseMsgCreateAuctionMap: object = { creator: '', index: '', blockHeight: 0, deadline: 0 }

export const MsgCreateAuctionMap = {
  encode(message: MsgCreateAuctionMap, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAuctionMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAuctionMap } as MsgCreateAuctionMap
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

  fromJSON(object: any): MsgCreateAuctionMap {
    const message = { ...baseMsgCreateAuctionMap } as MsgCreateAuctionMap
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

  toJSON(message: MsgCreateAuctionMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    message.deadline !== undefined && (obj.deadline = message.deadline)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateAuctionMap>): MsgCreateAuctionMap {
    const message = { ...baseMsgCreateAuctionMap } as MsgCreateAuctionMap
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

const baseMsgCreateAuctionMapResponse: object = {}

export const MsgCreateAuctionMapResponse = {
  encode(_: MsgCreateAuctionMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAuctionMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAuctionMapResponse } as MsgCreateAuctionMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateAuctionMapResponse {
    const message = { ...baseMsgCreateAuctionMapResponse } as MsgCreateAuctionMapResponse
    return message
  },

  toJSON(_: MsgCreateAuctionMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateAuctionMapResponse>): MsgCreateAuctionMapResponse {
    const message = { ...baseMsgCreateAuctionMapResponse } as MsgCreateAuctionMapResponse
    return message
  }
}

const baseMsgUpdateAuctionMap: object = { creator: '', index: '', blockHeight: 0, deadline: 0 }

export const MsgUpdateAuctionMap = {
  encode(message: MsgUpdateAuctionMap, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAuctionMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateAuctionMap } as MsgUpdateAuctionMap
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

  fromJSON(object: any): MsgUpdateAuctionMap {
    const message = { ...baseMsgUpdateAuctionMap } as MsgUpdateAuctionMap
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

  toJSON(message: MsgUpdateAuctionMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    message.deadline !== undefined && (obj.deadline = message.deadline)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateAuctionMap>): MsgUpdateAuctionMap {
    const message = { ...baseMsgUpdateAuctionMap } as MsgUpdateAuctionMap
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

const baseMsgUpdateAuctionMapResponse: object = {}

export const MsgUpdateAuctionMapResponse = {
  encode(_: MsgUpdateAuctionMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAuctionMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateAuctionMapResponse } as MsgUpdateAuctionMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateAuctionMapResponse {
    const message = { ...baseMsgUpdateAuctionMapResponse } as MsgUpdateAuctionMapResponse
    return message
  },

  toJSON(_: MsgUpdateAuctionMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateAuctionMapResponse>): MsgUpdateAuctionMapResponse {
    const message = { ...baseMsgUpdateAuctionMapResponse } as MsgUpdateAuctionMapResponse
    return message
  }
}

const baseMsgDeleteAuctionMap: object = { creator: '', index: '' }

export const MsgDeleteAuctionMap = {
  encode(message: MsgDeleteAuctionMap, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAuctionMap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteAuctionMap } as MsgDeleteAuctionMap
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteAuctionMap {
    const message = { ...baseMsgDeleteAuctionMap } as MsgDeleteAuctionMap
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
    return message
  },

  toJSON(message: MsgDeleteAuctionMap): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteAuctionMap>): MsgDeleteAuctionMap {
    const message = { ...baseMsgDeleteAuctionMap } as MsgDeleteAuctionMap
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
    return message
  }
}

const baseMsgDeleteAuctionMapResponse: object = {}

export const MsgDeleteAuctionMapResponse = {
  encode(_: MsgDeleteAuctionMapResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAuctionMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteAuctionMapResponse } as MsgDeleteAuctionMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteAuctionMapResponse {
    const message = { ...baseMsgDeleteAuctionMapResponse } as MsgDeleteAuctionMapResponse
    return message
  },

  toJSON(_: MsgDeleteAuctionMapResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteAuctionMapResponse>): MsgDeleteAuctionMapResponse {
    const message = { ...baseMsgDeleteAuctionMapResponse } as MsgDeleteAuctionMapResponse
    return message
  }
}

const baseMsgFinalizeAuction: object = { creator: '', auctionId: '' }

export const MsgFinalizeAuction = {
  encode(message: MsgFinalizeAuction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.auctionId !== '') {
      writer.uint32(18).string(message.auctionId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFinalizeAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgFinalizeAuction } as MsgFinalizeAuction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.auctionId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgFinalizeAuction {
    const message = { ...baseMsgFinalizeAuction } as MsgFinalizeAuction
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
    return message
  },

  toJSON(message: MsgFinalizeAuction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.auctionId !== undefined && (obj.auctionId = message.auctionId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgFinalizeAuction>): MsgFinalizeAuction {
    const message = { ...baseMsgFinalizeAuction } as MsgFinalizeAuction
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
    return message
  }
}

const baseMsgFinalizeAuctionResponse: object = {}

export const MsgFinalizeAuctionResponse = {
  encode(_: MsgFinalizeAuctionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFinalizeAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgFinalizeAuctionResponse } as MsgFinalizeAuctionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgFinalizeAuctionResponse {
    const message = { ...baseMsgFinalizeAuctionResponse } as MsgFinalizeAuctionResponse
    return message
  },

  toJSON(_: MsgFinalizeAuctionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgFinalizeAuctionResponse>): MsgFinalizeAuctionResponse {
    const message = { ...baseMsgFinalizeAuctionResponse } as MsgFinalizeAuctionResponse
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
      writer.uint32(24).uint64(message.amt)
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
          message.amt = longToNumber(reader.uint64() as Long)
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

const baseMsgCreateBidResponse: object = {}

export const MsgCreateBidResponse = {
  encode(_: MsgCreateBidResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateBidResponse } as MsgCreateBidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateBidResponse {
    const message = { ...baseMsgCreateBidResponse } as MsgCreateBidResponse
    return message
  },

  toJSON(_: MsgCreateBidResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse {
    const message = { ...baseMsgCreateBidResponse } as MsgCreateBidResponse
    return message
  }
}

const baseMsgCreateAuction: object = { creator: '', title: '' }

export const MsgCreateAuction = {
  encode(message: MsgCreateAuction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.title !== '') {
      writer.uint32(18).string(message.title)
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
    return message
  },

  toJSON(message: MsgCreateAuction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.title !== undefined && (obj.title = message.title)
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
    return message
  }
}

const baseMsgCreateAuctionResponse: object = {}

export const MsgCreateAuctionResponse = {
  encode(_: MsgCreateAuctionResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateAuctionResponse } as MsgCreateAuctionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateAuctionResponse {
    const message = { ...baseMsgCreateAuctionResponse } as MsgCreateAuctionResponse
    return message
  },

  toJSON(_: MsgCreateAuctionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateAuctionResponse>): MsgCreateAuctionResponse {
    const message = { ...baseMsgCreateAuctionResponse } as MsgCreateAuctionResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateBidMap(request: MsgCreateBidMap): Promise<MsgCreateBidMapResponse>
  UpdateBidMap(request: MsgUpdateBidMap): Promise<MsgUpdateBidMapResponse>
  DeleteBidMap(request: MsgDeleteBidMap): Promise<MsgDeleteBidMapResponse>
  CreateResultsMap(request: MsgCreateResultsMap): Promise<MsgCreateResultsMapResponse>
  UpdateResultsMap(request: MsgUpdateResultsMap): Promise<MsgUpdateResultsMapResponse>
  DeleteResultsMap(request: MsgDeleteResultsMap): Promise<MsgDeleteResultsMapResponse>
  CreateBidList(request: MsgCreateBidList): Promise<MsgCreateBidListResponse>
  UpdateBidList(request: MsgUpdateBidList): Promise<MsgUpdateBidListResponse>
  DeleteBidList(request: MsgDeleteBidList): Promise<MsgDeleteBidListResponse>
  CreateAuctionMap(request: MsgCreateAuctionMap): Promise<MsgCreateAuctionMapResponse>
  UpdateAuctionMap(request: MsgUpdateAuctionMap): Promise<MsgUpdateAuctionMapResponse>
  DeleteAuctionMap(request: MsgDeleteAuctionMap): Promise<MsgDeleteAuctionMapResponse>
  FinalizeAuction(request: MsgFinalizeAuction): Promise<MsgFinalizeAuctionResponse>
  CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateBidMap(request: MsgCreateBidMap): Promise<MsgCreateBidMapResponse> {
    const data = MsgCreateBidMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateBidMap', data)
    return promise.then((data) => MsgCreateBidMapResponse.decode(new Reader(data)))
  }

  UpdateBidMap(request: MsgUpdateBidMap): Promise<MsgUpdateBidMapResponse> {
    const data = MsgUpdateBidMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'UpdateBidMap', data)
    return promise.then((data) => MsgUpdateBidMapResponse.decode(new Reader(data)))
  }

  DeleteBidMap(request: MsgDeleteBidMap): Promise<MsgDeleteBidMapResponse> {
    const data = MsgDeleteBidMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'DeleteBidMap', data)
    return promise.then((data) => MsgDeleteBidMapResponse.decode(new Reader(data)))
  }

  CreateResultsMap(request: MsgCreateResultsMap): Promise<MsgCreateResultsMapResponse> {
    const data = MsgCreateResultsMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateResultsMap', data)
    return promise.then((data) => MsgCreateResultsMapResponse.decode(new Reader(data)))
  }

  UpdateResultsMap(request: MsgUpdateResultsMap): Promise<MsgUpdateResultsMapResponse> {
    const data = MsgUpdateResultsMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'UpdateResultsMap', data)
    return promise.then((data) => MsgUpdateResultsMapResponse.decode(new Reader(data)))
  }

  DeleteResultsMap(request: MsgDeleteResultsMap): Promise<MsgDeleteResultsMapResponse> {
    const data = MsgDeleteResultsMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'DeleteResultsMap', data)
    return promise.then((data) => MsgDeleteResultsMapResponse.decode(new Reader(data)))
  }

  CreateBidList(request: MsgCreateBidList): Promise<MsgCreateBidListResponse> {
    const data = MsgCreateBidList.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateBidList', data)
    return promise.then((data) => MsgCreateBidListResponse.decode(new Reader(data)))
  }

  UpdateBidList(request: MsgUpdateBidList): Promise<MsgUpdateBidListResponse> {
    const data = MsgUpdateBidList.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'UpdateBidList', data)
    return promise.then((data) => MsgUpdateBidListResponse.decode(new Reader(data)))
  }

  DeleteBidList(request: MsgDeleteBidList): Promise<MsgDeleteBidListResponse> {
    const data = MsgDeleteBidList.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'DeleteBidList', data)
    return promise.then((data) => MsgDeleteBidListResponse.decode(new Reader(data)))
  }

  CreateAuctionMap(request: MsgCreateAuctionMap): Promise<MsgCreateAuctionMapResponse> {
    const data = MsgCreateAuctionMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateAuctionMap', data)
    return promise.then((data) => MsgCreateAuctionMapResponse.decode(new Reader(data)))
  }

  UpdateAuctionMap(request: MsgUpdateAuctionMap): Promise<MsgUpdateAuctionMapResponse> {
    const data = MsgUpdateAuctionMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'UpdateAuctionMap', data)
    return promise.then((data) => MsgUpdateAuctionMapResponse.decode(new Reader(data)))
  }

  DeleteAuctionMap(request: MsgDeleteAuctionMap): Promise<MsgDeleteAuctionMapResponse> {
    const data = MsgDeleteAuctionMap.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'DeleteAuctionMap', data)
    return promise.then((data) => MsgDeleteAuctionMapResponse.decode(new Reader(data)))
  }

  FinalizeAuction(request: MsgFinalizeAuction): Promise<MsgFinalizeAuctionResponse> {
    const data = MsgFinalizeAuction.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'FinalizeAuction', data)
    return promise.then((data) => MsgFinalizeAuctionResponse.decode(new Reader(data)))
  }

  CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse> {
    const data = MsgCreateBid.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateBid', data)
    return promise.then((data) => MsgCreateBidResponse.decode(new Reader(data)))
  }

  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Msg', 'CreateAuction', data)
    return promise.then((data) => MsgCreateAuctionResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
