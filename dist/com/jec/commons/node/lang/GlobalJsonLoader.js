"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
const DefaultJsonLoader_1 = require("./DefaultJsonLoader");
class GlobalJsonLoader {
    constructor() {
        this._loader = null;
        this._id = null;
        if (GlobalJsonLoader._locked || GlobalJsonLoader.INSTANCE) {
            throw new jec_commons_1.SingletonError(GlobalJsonLoader);
        }
        GlobalJsonLoader._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (GlobalJsonLoader.INSTANCE === null) {
            GlobalJsonLoader._locked = false;
            GlobalJsonLoader.INSTANCE = new GlobalJsonLoader();
        }
        return GlobalJsonLoader.INSTANCE;
    }
    initObj() {
        this._id = jec_commons_1.GlobalGuidGenerator.getInstance().generate();
        this._loader = new DefaultJsonLoader_1.DefaultJsonLoader();
    }
    set encodingFormat(encodingFormat) {
        this._loader.encodingFormat = encodingFormat;
    }
    loadSync(path) {
        return this._loader.loadSync(path);
    }
    load(path, success, error) {
        this._loader.load(path, success, error);
    }
    getId() {
        return this._id;
    }
}
GlobalJsonLoader.INSTANCE = null;
GlobalJsonLoader._locked = true;
exports.GlobalJsonLoader = GlobalJsonLoader;
;
