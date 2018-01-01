"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n = require("i18n");
class LocaleManagerBase {
    constructor() {
        this._directory = "./public/locales";
        this._initialized = false;
    }
    init(locale, options) {
        if (locale) {
            let config = {
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
            this._initialized = true;
        }
        else
            this._initialized = false;
    }
    isInitialized() {
        return this._initialized;
    }
    getLocale() {
        return this._initialized ? i18n.getLocale() : null;
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
