// Type definitions for jec-commons-node
// Project: JEC Node.js Commons
// Definitions by: Pascal ECHEMANN <https://github.com/pechemann/JEC>

// Please maintain packages and alphabetical order.

declare module "jec-commons-node" {

import { FileProperties, FileStats, PathStats } from "jec-commons";

export class FilePropertiesBuilder {
    constructor();
    build(file: string, path: string, stats: FileStats): FileProperties;
}

export class WalkPathUtil {
    constructor();
    walkSync(path: string, process: (file: FileProperties) => void, pathStats?: PathStats): PathStats;
}

}