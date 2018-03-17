"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
const FilePropertiesBuilder_1 = require("./FilePropertiesBuilder");
const fs = require("fs");
const path = require("path");
class WalkPathUtil {
    constructor() { }
    walkSync(dirPath, process, pathStats = null) {
        const pathStatsResult = pathStats || new jec_commons_1.PathStats(dirPath);
        const files = fs.readdirSync(dirPath);
        const extension = jec_commons_1.UrlStringsEnum.DOT + jec_commons_1.JecStringsEnum.JS_EXTENSION;
        const builder = new FilePropertiesBuilder_1.FilePropertiesBuilder();
        let stats = null;
        let currPath = null;
        let fileProps = null;
        let extPos = -1;
        let filelength = -1;
        let rawFile = null;
        files.forEach((file) => {
            currPath = path.join(dirPath, file);
            stats = fs.statSync(currPath);
            if (stats.isDirectory()) {
                pathStatsResult.directoriesNum++;
                this.walkSync(currPath, process, pathStatsResult);
            }
            else {
                filelength = file.length;
                extPos = filelength - 3;
                pathStatsResult.filesNum++;
                if (file.lastIndexOf(extension) === extPos) {
                    pathStatsResult.processedFilesNum++;
                    fileProps = builder.build(file, currPath, stats);
                    process(fileProps);
                }
            }
        });
        return pathStatsResult;
    }
}
exports.WalkPathUtil = WalkPathUtil;
;
