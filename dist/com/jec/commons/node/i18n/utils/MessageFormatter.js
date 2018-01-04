"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sprintf_js_1 = require("sprintf-js");
const MessageFormatterStringsEnum_1 = require("./MessageFormatterStringsEnum");
class MessageFormatter {
    constructor() { }
    format(message, ...replace) {
        if (message.indexOf(MessageFormatterStringsEnum_1.MessageFormatterStringsEnum.PERCENT) !== -1 &&
            replace &&
            replace.length > 0) {
            message = sprintf_js_1.vsprintf(message, replace);
        }
        return message;
    }
}
exports.MessageFormatter = MessageFormatter;
