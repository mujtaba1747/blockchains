export interface CandleAuctionMap {
    creator?: string;
    index?: string;
    /** @format uint64 */
    blockHeight?: string;
    /** @format uint64 */
    deadline?: string;
}
export interface CandleBidList {
    creator?: string;
    /** @format uint64 */
    id?: string;
    auctionId?: string;
    /** @format uint64 */
    amt?: string;
}
export interface CandleBidMap {
    creator?: string;
    index?: string;
    auctionId?: string;
    /** @format uint64 */
    amt?: string;
    /** @format int64 */
    blockHeight?: string;
}
export declare type CandleMsgCreateAuctionMapResponse = object;
export declare type CandleMsgCreateAuctionResponse = object;
export interface CandleMsgCreateBidListResponse {
    /** @format uint64 */
    id?: string;
}
export declare type CandleMsgCreateBidMapResponse = object;
export declare type CandleMsgCreateBidResponse = object;
export declare type CandleMsgCreateResultsMapResponse = object;
export declare type CandleMsgDeleteAuctionMapResponse = object;
export declare type CandleMsgDeleteBidListResponse = object;
export declare type CandleMsgDeleteBidMapResponse = object;
export declare type CandleMsgDeleteResultsMapResponse = object;
export declare type CandleMsgFinalizeAuctionResponse = object;
export declare type CandleMsgUpdateAuctionMapResponse = object;
export declare type CandleMsgUpdateBidListResponse = object;
export declare type CandleMsgUpdateBidMapResponse = object;
export declare type CandleMsgUpdateResultsMapResponse = object;
export interface CandleQueryAllAuctionMapResponse {
    AuctionMap?: CandleAuctionMap[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface CandleQueryAllBidListResponse {
    BidList?: CandleBidList[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface CandleQueryAllBidMapResponse {
    BidMap?: CandleBidMap[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface CandleQueryAllResultsMapResponse {
    ResultsMap?: CandleResultsMap[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface CandleQueryGetAuctionMapResponse {
    AuctionMap?: CandleAuctionMap;
}
export interface CandleQueryGetBidListResponse {
    BidList?: CandleBidList;
}
export interface CandleQueryGetBidMapResponse {
    BidMap?: CandleBidMap;
}
export interface CandleQueryGetResultsMapResponse {
    ResultsMap?: CandleResultsMap;
}
export interface CandleResultsMap {
    creator?: string;
    index?: string;
    winner?: string;
    bidId?: string;
    /** @format int64 */
    endHeight?: string;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title candle/auction_map.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAuctionMapAll
     * @summary Queries a list of auctionMap items.
     * @request GET:/hello/candle/candle/auctionMap
     */
    queryAuctionMapAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<CandleQueryAllAuctionMapResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAuctionMap
     * @summary Queries a auctionMap by index.
     * @request GET:/hello/candle/candle/auctionMap/{index}
     */
    queryAuctionMap: (index: string, params?: RequestParams) => Promise<HttpResponse<CandleQueryGetAuctionMapResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBidListAll
     * @summary Queries a list of bidList items.
     * @request GET:/hello/candle/candle/bidList
     */
    queryBidListAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<CandleQueryAllBidListResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBidList
     * @summary Queries a bidList by id.
     * @request GET:/hello/candle/candle/bidList/{id}
     */
    queryBidList: (id: string, params?: RequestParams) => Promise<HttpResponse<CandleQueryGetBidListResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBidMapAll
     * @summary Queries a list of bidMap items.
     * @request GET:/hello/candle/candle/bidMap
     */
    queryBidMapAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<CandleQueryAllBidMapResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBidMap
     * @summary Queries a bidMap by index.
     * @request GET:/hello/candle/candle/bidMap/{index}
     */
    queryBidMap: (index: string, params?: RequestParams) => Promise<HttpResponse<CandleQueryGetBidMapResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryResultsMapAll
     * @summary Queries a list of resultsMap items.
     * @request GET:/hello/candle/candle/resultsMap
     */
    queryResultsMapAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<CandleQueryAllResultsMapResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryResultsMap
     * @summary Queries a resultsMap by index.
     * @request GET:/hello/candle/candle/resultsMap/{index}
     */
    queryResultsMap: (index: string, params?: RequestParams) => Promise<HttpResponse<CandleQueryGetResultsMapResponse, RpcStatus>>;
}
export {};
