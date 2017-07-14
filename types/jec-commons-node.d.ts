/*!
 * JEC Node.js Commons Module
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-commons-node" {

/// <reference types="node" />
import { FileProperties, FileStats, PathStats } from "jec-commons";
import * as fs from "fs";

export class FilePropertiesBuilder {    constructor();    build(file: string, path: string, stats: FileStats): FileProperties;}/// <reference types="node" />export class FileStatsProxy implements FileStats {    constructor(stats: fs.Stats);    private _fsStats;    private initObj(stats);    readonly dev: number;    readonly ino: number;    readonly mode: number;    readonly nlink: number;    readonly uid: number;    readonly gid: number;    readonly rdev: number;    readonly size: number;    readonly blksize: number;    readonly blocks: number;    readonly atime: Date;    readonly mtime: Date;    readonly ctime: Date;    readonly birthtime: Date;    isFile(): boolean;    isDirectory(): boolean;    isBlockDevice(): boolean;    isCharacterDevice(): boolean;    isSymbolicLink(): boolean;    isFIFO(): boolean;    isSocket(): boolean;}export class WalkPathUtil {    constructor();    walkSync(path: string, process: (file: FileProperties) => void, pathStats?: PathStats): PathStats;}}