"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIndexedEvent = exports.newIndexedEvent = exports.isMultipleEventsResponse = exports.newMultipleEventsResponse = exports.isMultipleEventsRequest = exports.newMultipleEventRequest = exports.isSingleEvent = exports.newSingleEvent = exports.BrokerEventClass = void 0;
var BrokerEventClass;
(function (BrokerEventClass) {
    BrokerEventClass["single"] = "broker__event__single";
    BrokerEventClass["getMultipleRequest"] = "broker__event__getMultipleRequest";
    BrokerEventClass["getMultipleResponse"] = "broker__event__getMultipleResponse";
    BrokerEventClass["indexed"] = "broker__event__indexed";
})(BrokerEventClass || (exports.BrokerEventClass = BrokerEventClass = {}));
function newSingleEvent(event) {
    return { type: BrokerEventClass.single, event: event };
}
exports.newSingleEvent = newSingleEvent;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isSingleEvent(testObj) {
    return (testObj.eventClass === BrokerEventClass.single)
        && (testObj.event !== undefined);
}
exports.isSingleEvent = isSingleEvent;
function newMultipleEventRequest() {
    return { type: BrokerEventClass.getMultipleRequest };
}
exports.newMultipleEventRequest = newMultipleEventRequest;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isMultipleEventsRequest(testObj) {
    return (testObj.eventClass === BrokerEventClass.getMultipleRequest);
}
exports.isMultipleEventsRequest = isMultipleEventsRequest;
function newMultipleEventsResponse(events) {
    return { type: BrokerEventClass.getMultipleResponse, events: events };
}
exports.newMultipleEventsResponse = newMultipleEventsResponse;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isMultipleEventsResponse(testObj) {
    return (testObj.type === BrokerEventClass.getMultipleResponse)
        && (testObj.events !== undefined);
}
exports.isMultipleEventsResponse = isMultipleEventsResponse;
function newIndexedEvent(index, event) {
    return { type: BrokerEventClass.indexed, index: index, event: event };
}
exports.newIndexedEvent = newIndexedEvent;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isIndexedEvent(testObj) {
    return (testObj.index !== undefined)
        && (testObj.event !== undefined)
        && (testObj.type === BrokerEventClass.indexed);
}
exports.isIndexedEvent = isIndexedEvent;
