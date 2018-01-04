"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n = require("i18n");
const LocaleParser_1 = require("./LocaleParser");
class LocaleManagerBase {
    constructor() {
        this._directory = "./public/locales";
        this._initialized = false;
        this._locale = null;
    }
    init(locale, options) {
        let config = null;
        let parser = null;
        if (locale) {
            config = {
                locales: [locale],
                defaultLocale: locale,
                directory: this._directory,
                objectNotation: true
            };
            if (options) {
                config = Object.assign({}, config, options);
                this._directory = config.directory;
            }
            i18n.configure(config);
            parser = new LocaleParser_1.LocaleParser();
            this._locale = parser.parse(locale);
            this._initialized = true;
        }
        else {
            this._locale = null;
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
        if (this._initialized)
            result = i18n.__(key, ...replace);
        return result;
    }
}
exports.LocaleManagerBase = LocaleManagerBase;
