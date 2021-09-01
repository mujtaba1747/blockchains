/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { ResultsMap } from '../candle/results_map'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { BidList } from '../candle/bid_list'
import { AuctionMap } from '../candle/auction_map'

export const protobufPackage = 'hello.candle.candle'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetResultsMapRequest {
  index: string
}

export interface QueryGetResultsMapResponse {
  ResultsMap: ResultsMap | undefined
}

export interface QueryAllResultsMapRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllResultsMapResponse {
  ResultsMap: ResultsMap[]
  pagination: PageResponse | undefined
}

export interface QueryGetBidListRequest {
  id: number
}

export interface QueryGetBidListResponse {
  BidList: BidList | undefined
}

export interface QueryAllBidListRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllBidListResponse {
  BidList: BidList[]
  pagination: PageResponse | undefined
}

export interface QueryGetAuctionMapRequest {
  index: string
}

export interface QueryGetAuctionMapResponse {
  AuctionMap: AuctionMap | undefined
}

export interface QueryAllAuctionMapRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllAuctionMapResponse {
  AuctionMap: AuctionMap[]
  pagination: PageResponse | undefined
}

const baseQueryGetResultsMapRequest: object = { index: '' }

export const QueryGetResultsMapRequest = {
  encode(message: QueryGetResultsMapRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetResultsMapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetResultsMapRequest } as QueryGetResultsMapRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetResultsMapRequest {
    const message = { ...baseQueryGetResultsMapRequest } as QueryGetResultsMapRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetResultsMapRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetResultsMapRequest>): QueryGetResultsMapRequest {
    const message = { ...baseQueryGetResultsMapRequest } as QueryGetResultsMapRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetResultsMapResponse: object = {}

export const QueryGetResultsMapResponse = {
  encode(message: QueryGetResultsMapResponse, writer: Writer = Writer.create()): Writer {
    if (message.ResultsMap !== undefined) {
      ResultsMap.encode(message.ResultsMap, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetResultsMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetResultsMapResponse } as QueryGetResultsMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ResultsMap = ResultsMap.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetResultsMapResponse {
    const message = { ...baseQueryGetResultsMapResponse } as QueryGetResultsMapResponse
    if (object.ResultsMap !== undefined && object.ResultsMap !== null) {
      message.ResultsMap = ResultsMap.fromJSON(object.ResultsMap)
    } else {
      message.ResultsMap = undefined
    }
    return message
  },

  toJSON(message: QueryGetResultsMapResponse): unknown {
    const obj: any = {}
    message.ResultsMap !== undefined && (obj.ResultsMap = message.ResultsMap ? ResultsMap.toJSON(message.ResultsMap) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetResultsMapResponse>): QueryGetResultsMapResponse {
    const message = { ...baseQueryGetResultsMapResponse } as QueryGetResultsMapResponse
    if (object.ResultsMap !== undefined && object.ResultsMap !== null) {
      message.ResultsMap = ResultsMap.fromPartial(object.ResultsMap)
    } else {
      message.ResultsMap = undefined
    }
    return message
  }
}

const baseQueryAllResultsMapRequest: object = {}

export const QueryAllResultsMapRequest = {
  encode(message: QueryAllResultsMapRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllResultsMapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllResultsMapRequest } as QueryAllResultsMapRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllResultsMapRequest {
    const message = { ...baseQueryAllResultsMapRequest } as QueryAllResultsMapRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllResultsMapRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllResultsMapRequest>): QueryAllResultsMapRequest {
    const message = { ...baseQueryAllResultsMapRequest } as QueryAllResultsMapRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllResultsMapResponse: object = {}

export const QueryAllResultsMapResponse = {
  encode(message: QueryAllResultsMapResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ResultsMap) {
      ResultsMap.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllResultsMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllResultsMapResponse } as QueryAllResultsMapResponse
    message.ResultsMap = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ResultsMap.push(ResultsMap.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllResultsMapResponse {
    const message = { ...baseQueryAllResultsMapResponse } as QueryAllResultsMapResponse
    message.ResultsMap = []
    if (object.ResultsMap !== undefined && object.ResultsMap !== null) {
      for (const e of object.ResultsMap) {
        message.ResultsMap.push(ResultsMap.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllResultsMapResponse): unknown {
    const obj: any = {}
    if (message.ResultsMap) {
      obj.ResultsMap = message.ResultsMap.map((e) => (e ? ResultsMap.toJSON(e) : undefined))
    } else {
      obj.ResultsMap = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllResultsMapResponse>): QueryAllResultsMapResponse {
    const message = { ...baseQueryAllResultsMapResponse } as QueryAllResultsMapResponse
    message.ResultsMap = []
    if (object.ResultsMap !== undefined && object.ResultsMap !== null) {
      for (const e of object.ResultsMap) {
        message.ResultsMap.push(ResultsMap.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetBidListRequest: object = { id: 0 }

export const QueryGetBidListRequest = {
  encode(message: QueryGetBidListRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBidListRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBidListRequest } as QueryGetBidListRequest
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

  fromJSON(object: any): QueryGetBidListRequest {
    const message = { ...baseQueryGetBidListRequest } as QueryGetBidListRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetBidListRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBidListRequest>): QueryGetBidListRequest {
    const message = { ...baseQueryGetBidListRequest } as QueryGetBidListRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetBidListResponse: object = {}

export const QueryGetBidListResponse = {
  encode(message: QueryGetBidListResponse, writer: Writer = Writer.create()): Writer {
    if (message.BidList !== undefined) {
      BidList.encode(message.BidList, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBidListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetBidListResponse } as QueryGetBidListResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BidList = BidList.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetBidListResponse {
    const message = { ...baseQueryGetBidListResponse } as QueryGetBidListResponse
    if (object.BidList !== undefined && object.BidList !== null) {
      message.BidList = BidList.fromJSON(object.BidList)
    } else {
      message.BidList = undefined
    }
    return message
  },

  toJSON(message: QueryGetBidListResponse): unknown {
    const obj: any = {}
    message.BidList !== undefined && (obj.BidList = message.BidList ? BidList.toJSON(message.BidList) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetBidListResponse>): QueryGetBidListResponse {
    const message = { ...baseQueryGetBidListResponse } as QueryGetBidListResponse
    if (object.BidList !== undefined && object.BidList !== null) {
      message.BidList = BidList.fromPartial(object.BidList)
    } else {
      message.BidList = undefined
    }
    return message
  }
}

const baseQueryAllBidListRequest: object = {}

export const QueryAllBidListRequest = {
  encode(message: QueryAllBidListRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBidListRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBidListRequest } as QueryAllBidListRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBidListRequest {
    const message = { ...baseQueryAllBidListRequest } as QueryAllBidListRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBidListRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBidListRequest>): QueryAllBidListRequest {
    const message = { ...baseQueryAllBidListRequest } as QueryAllBidListRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllBidListResponse: object = {}

export const QueryAllBidListResponse = {
  encode(message: QueryAllBidListResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.BidList) {
      BidList.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBidListResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllBidListResponse } as QueryAllBidListResponse
    message.BidList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.BidList.push(BidList.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllBidListResponse {
    const message = { ...baseQueryAllBidListResponse } as QueryAllBidListResponse
    message.BidList = []
    if (object.BidList !== undefined && object.BidList !== null) {
      for (const e of object.BidList) {
        message.BidList.push(BidList.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllBidListResponse): unknown {
    const obj: any = {}
    if (message.BidList) {
      obj.BidList = message.BidList.map((e) => (e ? BidList.toJSON(e) : undefined))
    } else {
      obj.BidList = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllBidListResponse>): QueryAllBidListResponse {
    const message = { ...baseQueryAllBidListResponse } as QueryAllBidListResponse
    message.BidList = []
    if (object.BidList !== undefined && object.BidList !== null) {
      for (const e of object.BidList) {
        message.BidList.push(BidList.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetAuctionMapRequest: object = { index: '' }

export const QueryGetAuctionMapRequest = {
  encode(message: QueryGetAuctionMapRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAuctionMapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAuctionMapRequest } as QueryGetAuctionMapRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAuctionMapRequest {
    const message = { ...baseQueryGetAuctionMapRequest } as QueryGetAuctionMapRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetAuctionMapRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAuctionMapRequest>): QueryGetAuctionMapRequest {
    const message = { ...baseQueryGetAuctionMapRequest } as QueryGetAuctionMapRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetAuctionMapResponse: object = {}

export const QueryGetAuctionMapResponse = {
  encode(message: QueryGetAuctionMapResponse, writer: Writer = Writer.create()): Writer {
    if (message.AuctionMap !== undefined) {
      AuctionMap.encode(message.AuctionMap, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAuctionMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetAuctionMapResponse } as QueryGetAuctionMapResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.AuctionMap = AuctionMap.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetAuctionMapResponse {
    const message = { ...baseQueryGetAuctionMapResponse } as QueryGetAuctionMapResponse
    if (object.AuctionMap !== undefined && object.AuctionMap !== null) {
      message.AuctionMap = AuctionMap.fromJSON(object.AuctionMap)
    } else {
      message.AuctionMap = undefined
    }
    return message
  },

  toJSON(message: QueryGetAuctionMapResponse): unknown {
    const obj: any = {}
    message.AuctionMap !== undefined && (obj.AuctionMap = message.AuctionMap ? AuctionMap.toJSON(message.AuctionMap) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetAuctionMapResponse>): QueryGetAuctionMapResponse {
    const message = { ...baseQueryGetAuctionMapResponse } as QueryGetAuctionMapResponse
    if (object.AuctionMap !== undefined && object.AuctionMap !== null) {
      message.AuctionMap = AuctionMap.fromPartial(object.AuctionMap)
    } else {
      message.AuctionMap = undefined
    }
    return message
  }
}

const baseQueryAllAuctionMapRequest: object = {}

export const QueryAllAuctionMapRequest = {
  encode(message: QueryAllAuctionMapRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAuctionMapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllAuctionMapRequest } as QueryAllAuctionMapRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllAuctionMapRequest {
    const message = { ...baseQueryAllAuctionMapRequest } as QueryAllAuctionMapRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllAuctionMapRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllAuctionMapRequest>): QueryAllAuctionMapRequest {
    const message = { ...baseQueryAllAuctionMapRequest } as QueryAllAuctionMapRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllAuctionMapResponse: object = {}

export const QueryAllAuctionMapResponse = {
  encode(message: QueryAllAuctionMapResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.AuctionMap) {
      AuctionMap.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAuctionMapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllAuctionMapResponse } as QueryAllAuctionMapResponse
    message.AuctionMap = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.AuctionMap.push(AuctionMap.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllAuctionMapResponse {
    const message = { ...baseQueryAllAuctionMapResponse } as QueryAllAuctionMapResponse
    message.AuctionMap = []
    if (object.AuctionMap !== undefined && object.AuctionMap !== null) {
      for (const e of object.AuctionMap) {
        message.AuctionMap.push(AuctionMap.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllAuctionMapResponse): unknown {
    const obj: any = {}
    if (message.AuctionMap) {
      obj.AuctionMap = message.AuctionMap.map((e) => (e ? AuctionMap.toJSON(e) : undefined))
    } else {
      obj.AuctionMap = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllAuctionMapResponse>): QueryAllAuctionMapResponse {
    const message = { ...baseQueryAllAuctionMapResponse } as QueryAllAuctionMapResponse
    message.AuctionMap = []
    if (object.AuctionMap !== undefined && object.AuctionMap !== null) {
      for (const e of object.AuctionMap) {
        message.AuctionMap.push(AuctionMap.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a resultsMap by index. */
  ResultsMap(request: QueryGetResultsMapRequest): Promise<QueryGetResultsMapResponse>
  /** Queries a list of resultsMap items. */
  ResultsMapAll(request: QueryAllResultsMapRequest): Promise<QueryAllResultsMapResponse>
  /** Queries a bidList by id. */
  BidList(request: QueryGetBidListRequest): Promise<QueryGetBidListResponse>
  /** Queries a list of bidList items. */
  BidListAll(request: QueryAllBidListRequest): Promise<QueryAllBidListResponse>
  /** Queries a auctionMap by index. */
  AuctionMap(request: QueryGetAuctionMapRequest): Promise<QueryGetAuctionMapResponse>
  /** Queries a list of auctionMap items. */
  AuctionMapAll(request: QueryAllAuctionMapRequest): Promise<QueryAllAuctionMapResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  ResultsMap(request: QueryGetResultsMapRequest): Promise<QueryGetResultsMapResponse> {
    const data = QueryGetResultsMapRequest.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Query', 'ResultsMap', data)
    return promise.then((data) => QueryGetResultsMapResponse.decode(new Reader(data)))
  }

  ResultsMapAll(request: QueryAllResultsMapRequest): Promise<QueryAllResultsMapResponse> {
    const data = QueryAllResultsMapRequest.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Query', 'ResultsMapAll', data)
    return promise.then((data) => QueryAllResultsMapResponse.decode(new Reader(data)))
  }

  BidList(request: QueryGetBidListRequest): Promise<QueryGetBidListResponse> {
    const data = QueryGetBidListRequest.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Query', 'BidList', data)
    return promise.then((data) => QueryGetBidListResponse.decode(new Reader(data)))
  }

  BidListAll(request: QueryAllBidListRequest): Promise<QueryAllBidListResponse> {
    const data = QueryAllBidListRequest.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Query', 'BidListAll', data)
    return promise.then((data) => QueryAllBidListResponse.decode(new Reader(data)))
  }

  AuctionMap(request: QueryGetAuctionMapRequest): Promise<QueryGetAuctionMapResponse> {
    const data = QueryGetAuctionMapRequest.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Query', 'AuctionMap', data)
    return promise.then((data) => QueryGetAuctionMapResponse.decode(new Reader(data)))
  }

  AuctionMapAll(request: QueryAllAuctionMapRequest): Promise<QueryAllAuctionMapResponse> {
    const data = QueryAllAuctionMapRequest.encode(request).finish()
    const promise = this.rpc.request('hello.candle.candle.Query', 'AuctionMapAll', data)
    return promise.then((data) => QueryAllAuctionMapResponse.decode(new Reader(data)))
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
