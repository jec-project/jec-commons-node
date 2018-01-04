"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const DefaultJsonLoader_1 = require("../../lang/DefaultJsonLoader");
const ResourceBundleStringsEnum_1 = require("./ResourceBundleStringsEnum");
class ResourceBundle {
    constructor() {
        this._locale = null;
        this._properties = null;
        this.directory = null;
    }
    loadResource() {
        let filepath = path.normalize(this.directory + path.sep +
            this._locale.toString() + ResourceBundleStringsEnum_1.ResourceBundleStringsEnum.JSON);
        let loader = new DefaultJsonLoader_1.DefaultJsonLoader();
        this._properties = loader.loadSync(filepath);
    }
    getKeyProperty(key) {
        let result = this._properties;
        let keys = key.split(ResourceBundleStringsEnum_1.ResourceBundleStringsEnum.DOT);
        let len = keys.length - 1;
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
        return this.getKeyProperty(key);
    }
}
exports.ResourceBundle = ResourceBundle;
