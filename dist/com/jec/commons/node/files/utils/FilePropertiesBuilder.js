"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
const fs = require("fs");
class FilePropertiesBuilder {
    constructor() { }
    build(file, path, stats) {
        let fileProps = new jec_commons_1.BasicFileProperties();
        let filelength = file.length;
        let extPos = filelength - 3;
        fileProps.name = file.substr(0, extPos);
        fileProps.path = path.substr(0, path.length - filelength);
        fileProps.extension = jec_commons_1.JecStringsEnum.JS_EXTENSION;
        fileProps.stats = stats;
        let rawFile = fs.readFileSync(path).toString();
        fileProps.content = rawFile;
        fileProps.decorators = jec_commons_1.DecoratorParser.findDecorators(rawFile);
        return fileProps;
    }
}
exports.FilePropertiesBuilder = FilePropertiesBuilder;
