"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocaleParser_1 = require("./LocaleParser");
const ResourceBundle_1 = require("./utils/ResourceBundle");
const MessageFormatter_1 = require("./utils/MessageFormatter");
class LocaleManagerBase {
    constructor() {
        this._directory = "./public/locales";
        this._initialized = false;
        this._locale = null;
        this._bundle = null;
        this._formatter = null;
        this.initObj();
    }
    initObj() {
        this._formatter = new MessageFormatter_1.MessageFormatter();
    }
    init(locale, options) {
        let parser = null;
        if (locale) {
            if (options) {
                if (options.directory)
                    this._directory = options.directory;
            }
            parser = new LocaleParser_1.LocaleParser();
            this._locale = parser.parse(locale);
            this._bundle = new ResourceBundle_1.ResourceBundle();
            this._bundle.directory = this._directory;
            this._bundle.setLocale(this._locale);
            this._initialized = true;
        }
        else {
            this._bundle = null;
            this._locale = null;
            this._directory = "./public/locales";
            this._initialized = false;
        }
    }
    isInitialized() {
        return this._initialized;
    }
    getLocale() {
        return this._locale;
    }
    getDirectory() {
        return this._directory;
    }
    get(key, ...replace) {
        let result = null;
        if (this._initialized) {
            result = this._bundle.getString(key);
            if (result !== key) {
                result = this._formatter.format(result, ...replace);
            }
        }
        return result;
    }
}
exports.LocaleManagerBase = LocaleManagerBase;
