/* eslint-disable */
export const protobufPackage = 'cosmonaut.nameservice.nameservice'

/** Query defines the gRPC querier service. */
export interface Query {}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}
