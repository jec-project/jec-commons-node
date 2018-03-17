"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const GlobalJsonLoader_1 = require("../../lang/GlobalJsonLoader");
const ResourceBundleStringsEnum_1 = require("./ResourceBundleStringsEnum");
class ResourceBundle {
    constructor() {
        this._locale = null;
        this._properties = null;
        this.directory = null;
    }
    loadResource() {
        const filepath = path.normalize(this.directory + path.sep +
            this._locale.toString() + ResourceBundleStringsEnum_1.ResourceBundleStringsEnum.JSON);
        this._properties = GlobalJsonLoader_1.GlobalJsonLoader.getInstance().loadSync(filepath);
    }
    resolveKey(key) {
        const keys = key.split(ResourceBundleStringsEnum_1.ResourceBundleStringsEnum.DOT);
        const len = keys.length - 1;
        let result = this._properties;
        let i = 0;
        let currKey = null;
        for (; i <= len; ++i) {
            currKey = keys[i];
            if (result.hasOwnProperty(currKey)) {
                result = result[currKey];
            }
            else {
                result = key;
                break;
            }
        }
        return result.toString();
    }
    getLocale() {
        return this._locale;
    }
    setLocale(locale) {
        this._locale = locale;
        if (locale) {
            this.loadResource();
        }
        else {
            this._properties = null;
        }
    }
    getString(key) {
        return this.resolveKey(key);
    }
}
exports.ResourceBundle = ResourceBundle;
