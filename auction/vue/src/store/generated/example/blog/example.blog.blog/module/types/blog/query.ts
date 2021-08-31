/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'example.blog.blog'

/** this line is used by starport scaffolding # 3 */
export interface QueryDetailsRequest {}

export interface QueryDetailsResponse {
  body: string
}

const baseQueryDetailsRequest: object = {}

export const QueryDetailsRequest = {
  encode(_: QueryDetailsRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDetailsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryDetailsRequest } as QueryDetailsRequest
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

  fromJSON(_: any): QueryDetailsRequest {
    const message = { ...baseQueryDetailsRequest } as QueryDetailsRequest
    return message
  },

  toJSON(_: QueryDetailsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryDetailsRequest>): QueryDetailsRequest {
    const message = { ...baseQueryDetailsRequest } as QueryDetailsRequest
    return message
  }
}

const baseQueryDetailsResponse: object = { body: '' }

export const QueryDetailsResponse = {
  encode(message: QueryDetailsResponse, writer: Writer = Writer.create()): Writer {
    if (message.body !== '') {
      writer.uint32(10).string(message.body)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDetailsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryDetailsResponse } as QueryDetailsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.body = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryDetailsResponse {
    const message = { ...baseQueryDetailsResponse } as QueryDetailsResponse
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body)
    } else {
      message.body = ''
    }
    return message
  },

  toJSON(message: QueryDetailsResponse): unknown {
    const obj: any = {}
    message.body !== undefined && (obj.body = message.body)
    return obj
  },

  fromPartial(object: DeepPartial<QueryDetailsResponse>): QueryDetailsResponse {
    const message = { ...baseQueryDetailsResponse } as QueryDetailsResponse
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body
    } else {
      message.body = ''
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of details items. */
  Details(request: QueryDetailsRequest): Promise<QueryDetailsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Details(request: QueryDetailsRequest): Promise<QueryDetailsResponse> {
    const data = QueryDetailsRequest.encode(request).finish()
    const promise = this.rpc.request('example.blog.blog.Query', 'Details', data)
    return promise.then((data) => QueryDetailsResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
