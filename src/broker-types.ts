export enum BrokerEventClass {
	single = "broker__event__single",
	getMultipleRequest = "broker__event__getMultipleRequest",
	getMultipleResponse = "broker__event__getMultipleResponse",
}

export type SingleEvent = {
	eventClass: BrokerEventClass
	event: object,
}

export function newSingleEvent(event: object): SingleEvent {
	return { eventClass: BrokerEventClass.single, event: event }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSingleEvent(testObj: any): testObj is SingleEvent {
	return (testObj.eventClass === BrokerEventClass.single)
		&& (testObj.event !== undefined)
}

export type MultipleEventsRequest = {
	eventClass: BrokerEventClass
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMultipleEventsRequest(testObj: any): testObj is MultipleEventsRequest {
	return (testObj.eventClass === BrokerEventClass.getMultipleRequest)
}

export type MultipleEventsResponse = {
	eventClass: BrokerEventClass,
	events: IndexedEvent[],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMultipleEventsResponse(testObj: any): testObj is MultipleEventsResponse {
	return (testObj.eventClass === BrokerEventClass.getMultipleResponse) 
		&& (testObj.events !== undefined)
}

export function newMultipleEventsResponse(events: IndexedEvent[]): MultipleEventsResponse {
	return { eventClass: BrokerEventClass.getMultipleResponse, events: events }
}

export function newMultipleEventRequest(): MultipleEventsRequest {
	return { eventClass: BrokerEventClass.getMultipleRequest }
}

export type IndexedEvent = {
	index: number,
	event: object,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isIndexedEvent(testObj: any) {
	return (testObj.index !== undefined) && (testObj.event !== undefined)
}

export function newIndexedEvent(index: number, event: object): IndexedEvent {
	return { index: index, event: event }
}