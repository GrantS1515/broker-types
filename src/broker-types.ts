export enum BrokerEventClass {
	single = "broker__event__single",
	getMultipleRequest = "broker__event__getMultipleRequest",
	getMultipleResponse = "broker__event__getMultipleResponse",
	indexed = "broker__event__indexed",
}

export type SingleEvent = {
	type: BrokerEventClass.single
	event: object,
}

export function newSingleEvent(event: object): SingleEvent {
	return { type: BrokerEventClass.single, event: event }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSingleEvent(testObj: any): testObj is SingleEvent {
	return (testObj.eventClass === BrokerEventClass.single)
		&& (testObj.event !== undefined)
}

export type MultipleEventsRequest = {
	type: BrokerEventClass.getMultipleRequest
}

export function newMultipleEventRequest(): MultipleEventsRequest {
	return { type: BrokerEventClass.getMultipleRequest }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMultipleEventsRequest(testObj: any): testObj is MultipleEventsRequest {
	return (testObj.eventClass === BrokerEventClass.getMultipleRequest)
}

export type MultipleEventsResponse = {
	type: BrokerEventClass,
	events: IndexedEvent[],
}

export function newMultipleEventsResponse(events: IndexedEvent[]): MultipleEventsResponse {
	return { type: BrokerEventClass.getMultipleResponse, events: events }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMultipleEventsResponse(testObj: any): testObj is MultipleEventsResponse {
	return (testObj.type === BrokerEventClass.getMultipleResponse) 
		&& (testObj.events !== undefined)
}

export type IndexedEvent = {
	type: BrokerEventClass.indexed,
	index: number,
	event: SingleEvent,
}

export function newIndexedEvent(index: number, event: SingleEvent): IndexedEvent {
	return { type: BrokerEventClass.indexed, index: index, event: event }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isIndexedEvent(testObj: any) {
	return (testObj.index !== undefined) 
		&& (testObj.event !== undefined)
		&& (testObj.type === BrokerEventClass.indexed)
}