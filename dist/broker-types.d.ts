export declare enum BrokerEventClass {
    single = "broker__event__single",
    getMultipleRequest = "broker__event__getMultipleRequest",
    getMultipleResponse = "broker__event__getMultipleResponse",
    indexed = "broker__event__indexed"
}
export type SingleEvent = {
    type: BrokerEventClass.single;
    event: object;
};
export declare function newSingleEvent(event: object): SingleEvent;
export declare function isSingleEvent(testObj: any): testObj is SingleEvent;
export type MultipleEventsRequest = {
    type: BrokerEventClass.getMultipleRequest;
};
export declare function newMultipleEventRequest(): MultipleEventsRequest;
export declare function isMultipleEventsRequest(testObj: any): testObj is MultipleEventsRequest;
export type MultipleEventsResponse = {
    type: BrokerEventClass;
    events: IndexedEvent[];
};
export declare function newMultipleEventsResponse(events: IndexedEvent[]): MultipleEventsResponse;
export declare function isMultipleEventsResponse(testObj: any): testObj is MultipleEventsResponse;
export type IndexedEvent = {
    type: BrokerEventClass.indexed;
    index: number;
    event: SingleEvent;
};
export declare function newIndexedEvent(index: number, event: SingleEvent): IndexedEvent;
export declare function isIndexedEvent(testObj: any): boolean;
