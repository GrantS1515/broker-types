"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIndexedEvent = exports.newMultipleEventRequest = exports.newMultipleEventsResponse = exports.isMultipleEventsResponse = exports.isMultipleEventsRequest = exports.isSingleEvent = exports.newSingleEvent = exports.BrokerEventClass = void 0;
var BrokerEventClass;
(function (BrokerEventClass) {
    BrokerEventClass["single"] = "broker__event__single";
    BrokerEventClass["getMultipleRequest"] = "broker__event__getMultipleRequest";
    BrokerEventClass["getMultipleResponse"] = "broker__event__getMultipleResponse";
})(BrokerEventClass || (exports.BrokerEventClass = BrokerEventClass = {}));
function newSingleEvent(event) {
    return { eventClass: BrokerEventClass.single, event: event };
}
exports.newSingleEvent = newSingleEvent;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isSingleEvent(testObj) {
    return (testObj.eventClass === BrokerEventClass.single)
        && (testObj.event !== undefined);
}
exports.isSingleEvent = isSingleEvent;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isMultipleEventsRequest(testObj) {
    return (testObj.eventClass === BrokerEventClass.getMultipleRequest);
}
exports.isMultipleEventsRequest = isMultipleEventsRequest;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isMultipleEventsResponse(testObj) {
    return (testObj.eventClass === BrokerEventClass.getMultipleResponse)
        && (testObj.events !== undefined);
}
exports.isMultipleEventsResponse = isMultipleEventsResponse;
function newMultipleEventsResponse(events) {
    return { eventClass: BrokerEventClass.getMultipleResponse, events: events };
}
exports.newMultipleEventsResponse = newMultipleEventsResponse;
function newMultipleEventRequest() {
    return { eventClass: BrokerEventClass.getMultipleRequest };
}
exports.newMultipleEventRequest = newMultipleEventRequest;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isIndexedEvent(testObj) {
    return (testObj.index !== undefined) && (testObj.event !== undefined);
}
exports.isIndexedEvent = isIndexedEvent;
