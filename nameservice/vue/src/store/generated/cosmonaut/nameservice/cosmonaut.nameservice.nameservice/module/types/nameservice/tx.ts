/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'cosmonaut.nameservice.nameservice'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateName {
  creator: string
  name: string
}

export interface MsgCreateNameResponse {}

export interface MsgDeleteName {
  creator: string
  name: string
}

export interface MsgDeleteNameResponse {}

export interface MsgSetName {
  creator: string
  name: string
  value: string
}

export interface MsgSetNameResponse {}

export interface MsgBuyName {
  creator: string
  name: string
  bid: string
}

export interface MsgBuyNameResponse {}

const baseMsgCreateName: object = { creator: '', name: '' }

export const MsgCreateName = {
  encode(message: MsgCreateName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateName } as MsgCreateName
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateName {
    const message = { ...baseMsgCreateName } as MsgCreateName
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: MsgCreateName): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateName>): MsgCreateName {
    const message = { ...baseMsgCreateName } as MsgCreateName
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  }
}

const baseMsgCreateNameResponse: object = {}

export const MsgCreateNameResponse = {
  encode(_: MsgCreateNameResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse
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

  fromJSON(_: any): MsgCreateNameResponse {
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse
    return message
  },

  toJSON(_: MsgCreateNameResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateNameResponse>): MsgCreateNameResponse {
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse
    return message
  }
}

const baseMsgDeleteName: object = { creator: '', name: '' }

export const MsgDeleteName = {
  encode(message: MsgDeleteName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteName } as MsgDeleteName
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteName {
    const message = { ...baseMsgDeleteName } as MsgDeleteName
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: MsgDeleteName): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteName>): MsgDeleteName {
    const message = { ...baseMsgDeleteName } as MsgDeleteName
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  }
}

const baseMsgDeleteNameResponse: object = {}

export const MsgDeleteNameResponse = {
  encode(_: MsgDeleteNameResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteNameResponse } as MsgDeleteNameResponse
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

  fromJSON(_: any): MsgDeleteNameResponse {
    const message = { ...baseMsgDeleteNameResponse } as MsgDeleteNameResponse
    return message
  },

  toJSON(_: MsgDeleteNameResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteNameResponse>): MsgDeleteNameResponse {
    const message = { ...baseMsgDeleteNameResponse } as MsgDeleteNameResponse
    return message
  }
}

const baseMsgSetName: object = { creator: '', name: '', value: '' }

export const MsgSetName = {
  encode(message: MsgSetName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.value !== '') {
      writer.uint32(26).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSetName } as MsgSetName
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSetName {
    const message = { ...baseMsgSetName } as MsgSetName
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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
    return message
  },

  toJSON(message: MsgSetName): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSetName>): MsgSetName {
    const message = { ...baseMsgSetName } as MsgSetName
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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
    return message
  }
}

const baseMsgSetNameResponse: object = {}

export const MsgSetNameResponse = {
  encode(_: MsgSetNameResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSetNameResponse } as MsgSetNameResponse
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

  fromJSON(_: any): MsgSetNameResponse {
    const message = { ...baseMsgSetNameResponse } as MsgSetNameResponse
    return message
  },

  toJSON(_: MsgSetNameResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSetNameResponse>): MsgSetNameResponse {
    const message = { ...baseMsgSetNameResponse } as MsgSetNameResponse
    return message
  }
}

const baseMsgBuyName: object = { creator: '', name: '', bid: '' }

export const MsgBuyName = {
  encode(message: MsgBuyName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.bid !== '') {
      writer.uint32(26).string(message.bid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyName } as MsgBuyName
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.bid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBuyName {
    const message = { ...baseMsgBuyName } as MsgBuyName
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = String(object.bid)
    } else {
      message.bid = ''
    }
    return message
  },

  toJSON(message: MsgBuyName): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.bid !== undefined && (obj.bid = message.bid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBuyName>): MsgBuyName {
    const message = { ...baseMsgBuyName } as MsgBuyName
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = object.bid
    } else {
      message.bid = ''
    }
    return message
  }
}

const baseMsgBuyNameResponse: object = {}

export const MsgBuyNameResponse = {
  encode(_: MsgBuyNameResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyNameResponse } as MsgBuyNameResponse
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

  fromJSON(_: any): MsgBuyNameResponse {
    const message = { ...baseMsgBuyNameResponse } as MsgBuyNameResponse
    return message
  },

  toJSON(_: MsgBuyNameResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBuyNameResponse>): MsgBuyNameResponse {
    const message = { ...baseMsgBuyNameResponse } as MsgBuyNameResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse>
  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>
  SetName(request: MsgSetName): Promise<MsgSetNameResponse>
  BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse> {
    const data = MsgCreateName.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.nameservice.nameservice.Msg', 'CreateName', data)
    return promise.then((data) => MsgCreateNameResponse.decode(new Reader(data)))
  }

  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse> {
    const data = MsgDeleteName.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.nameservice.nameservice.Msg', 'DeleteName', data)
    return promise.then((data) => MsgDeleteNameResponse.decode(new Reader(data)))
  }

  SetName(request: MsgSetName): Promise<MsgSetNameResponse> {
    const data = MsgSetName.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.nameservice.nameservice.Msg', 'SetName', data)
    return promise.then((data) => MsgSetNameResponse.decode(new Reader(data)))
  }

  BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse> {
    const data = MsgBuyName.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.nameservice.nameservice.Msg', 'BuyName', data)
    return promise.then((data) => MsgBuyNameResponse.decode(new Reader(data)))
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
