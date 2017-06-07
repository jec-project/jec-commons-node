// Type definitions for jec-commons-node
// Project: JEC Node.js Commons
// Definitions by: Pascal ECHEMANN <https://github.com/pechemann/JEC>

// Please maintain packages and alphabetical order.

declare module "jec-commons-node" {

/// <reference types="node" />
import { FileProperties, FileStats, PathStats } from "jec-commons";
import * as fs from "fs";

export class FilePropertiesBuilder {
    constructor();
    build(file: string, path: string, stats: FileStats): FileProperties;
}

export class FileStatsProxy implements FileStats {
    constructor(stats: fs.Stats);
    private _fsStats;
    private initObj(stats);
    readonly dev: number;
    readonly ino: number;
    readonly mode: number;
    readonly nlink: number;
    readonly uid: number;
    readonly gid: number;
    readonly rdev: number;
    readonly size: number;
    readonly blksize: number;
    readonly blocks: number;
    readonly atime: Date;
    readonly mtime: Date;
    readonly ctime: Date;
    readonly birthtime: Date;
    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
}

export class WalkPathUtil {
    constructor();
    walkSync(path: string, process: (file: FileProperties) => void, pathStats?: PathStats): PathStats;
}

}