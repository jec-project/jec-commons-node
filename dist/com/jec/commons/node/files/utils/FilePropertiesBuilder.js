"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
const fs = require("fs");
const pathUtils = require("path");
class FilePropertiesBuilder {
    constructor() { }
    build(file, path, stats) {
        let fileProps = new jec_commons_1.BasicFileProperties();
        const filelength = file.length;
        const extPos = filelength - 3;
        let rawFile = null;
        fileProps.name = file.substr(0, extPos);
        fileProps.path = pathUtils.normalize(path.substr(0, path.length - filelength));
        fileProps.extension = jec_commons_1.JecStringsEnum.JS_EXTENSION;
        fileProps.stats = stats;
        rawFile = fs.readFileSync(path).toString();
        fileProps.content = rawFile;
        fileProps.decorators = jec_commons_1.DecoratorParser.findDecorators(rawFile);
        return fileProps;
    }
}
exports.FilePropertiesBuilder = FilePropertiesBuilder;
