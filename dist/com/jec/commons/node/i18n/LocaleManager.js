"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n = require("i18n");
const jec_commons_1 = require("jec-commons");
class LocaleManager {
    constructor() {
        this._initialized = false;
        this._directory = "./public/locales";
        let msg = null;
        let manager = null;
        if (LocaleManager._locked || LocaleManager.INSTANCE) {
            manager = LocaleManager.getInstance();
            if (manager.isInitialized()) {
                msg = manager.get("errors.singleton", "LocaleManager");
            }
            else {
                msg = "You cannot create a LocaleManager instance; use getInstance() instead.";
            }
            throw new jec_commons_1.SingletonError(msg);
        }
        LocaleManager._locked = true;
    }
    static getInstance() {
        if (LocaleManager.INSTANCE === null) {
            LocaleManager._locked = false;
            LocaleManager.INSTANCE = new LocaleManager();
        }
        return LocaleManager.INSTANCE;
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
LocaleManager._locked = true;
LocaleManager.INSTANCE = null;
exports.LocaleManager = LocaleManager;
