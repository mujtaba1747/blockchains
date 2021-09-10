/* eslint-disable */
import { Whois, Params } from '../nameservice/whois'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'cosmonaut.nameservice.nameservice'

export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  whoisList: Whois[]
  Params: Params | undefined
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.whoisList) {
      Whois.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.Params !== undefined) {
      Params.encode(message.Params, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.whoisList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.whoisList.push(Whois.decode(reader, reader.uint32()))
          break
        case 2:
          message.Params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.whoisList = []
    if (object.whoisList !== undefined && object.whoisList !== null) {
      for (const e of object.whoisList) {
        message.whoisList.push(Whois.fromJSON(e))
      }
    }
    if (object.Params !== undefined && object.Params !== null) {
      message.Params = Params.fromJSON(object.Params)
    } else {
      message.Params = undefined
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.whoisList) {
      obj.whoisList = message.whoisList.map((e) => (e ? Whois.toJSON(e) : undefined))
    } else {
      obj.whoisList = []
    }
    message.Params !== undefined && (obj.Params = message.Params ? Params.toJSON(message.Params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.whoisList = []
    if (object.whoisList !== undefined && object.whoisList !== null) {
      for (const e of object.whoisList) {
        message.whoisList.push(Whois.fromPartial(e))
      }
    }
    if (object.Params !== undefined && object.Params !== null) {
      message.Params = Params.fromPartial(object.Params)
    } else {
      message.Params = undefined
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
