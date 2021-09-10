/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'cosmonaut.nameservice.nameservice'

export interface Whois {
  creator: string
  index: string
  name: string
  value: string
  price: string
  createHt: string
  expiry: string
}

export interface Params {
  minPrice: number
}

const baseWhois: object = { creator: '', index: '', name: '', value: '', price: '', createHt: '', expiry: '' }

export const Whois = {
  encode(message: Whois, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.value !== '') {
      writer.uint32(34).string(message.value)
    }
    if (message.price !== '') {
      writer.uint32(42).string(message.price)
    }
    if (message.createHt !== '') {
      writer.uint32(50).string(message.createHt)
    }
    if (message.expiry !== '') {
      writer.uint32(58).string(message.expiry)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Whois {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseWhois } as Whois
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
          message.name = reader.string()
          break
        case 4:
          message.value = reader.string()
          break
        case 5:
          message.price = reader.string()
          break
        case 6:
          message.createHt = reader.string()
          break
        case 7:
          message.expiry = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Whois {
    const message = { ...baseWhois } as Whois
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    if (object.createHt !== undefined && object.createHt !== null) {
      message.createHt = String(object.createHt)
    } else {
      message.createHt = ''
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = String(object.expiry)
    } else {
      message.expiry = ''
    }
    return message
  },

  toJSON(message: Whois): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.name !== undefined && (obj.name = message.name)
    message.value !== undefined && (obj.value = message.value)
    message.price !== undefined && (obj.price = message.price)
    message.createHt !== undefined && (obj.createHt = message.createHt)
    message.expiry !== undefined && (obj.expiry = message.expiry)
    return obj
  },

  fromPartial(object: DeepPartial<Whois>): Whois {
    const message = { ...baseWhois } as Whois
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    if (object.createHt !== undefined && object.createHt !== null) {
      message.createHt = object.createHt
    } else {
      message.createHt = ''
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = object.expiry
    } else {
      message.expiry = ''
    }
    return message
  }
}

const baseParams: object = { minPrice: 0 }

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.minPrice !== 0) {
      writer.uint32(8).int64(message.minPrice)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseParams } as Params
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.minPrice = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params
    if (object.minPrice !== undefined && object.minPrice !== null) {
      message.minPrice = Number(object.minPrice)
    } else {
      message.minPrice = 0
    }
    return message
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.minPrice !== undefined && (obj.minPrice = message.minPrice)
    return obj
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params
    if (object.minPrice !== undefined && object.minPrice !== null) {
      message.minPrice = object.minPrice
    } else {
      message.minPrice = 0
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
