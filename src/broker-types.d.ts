export declare enum BrokerEventClass {
    single = "broker__event__single",
    getMultipleRequest = "broker__event__getMultipleRequest",
    getMultipleResponse = "broker__event__getMultipleResponse"
}
export type SingleEvent = {
    eventClass: BrokerEventClass;
    event: object;
};
export declare function newSingleEvent(event: object): SingleEvent;
export declare function isSingleEvent(testObj: any): testObj is SingleEvent;
export type MultipleEventsRequest = {
    eventClass: BrokerEventClass;
};
export declare function isMultipleEventsRequest(testObj: any): testObj is MultipleEventsRequest;
export type MultipleEventsResponse = {
    eventClass: BrokerEventClass;
    events: IndexedEvent[];
};
export declare function isMultipleEventsResponse(testObj: any): testObj is MultipleEventsResponse;
export declare function newMultipleEventsResponse(events: IndexedEvent[]): MultipleEventsResponse;
export declare function newMultipleEventRequest(): MultipleEventsRequest;
export type IndexedEvent = {
    index: number;
    event: object;
};
export declare function isIndexedEvent(testObj: any): boolean;
