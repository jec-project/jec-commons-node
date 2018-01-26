/*!
 * JEC Node.js Commons Module
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-commons-node" {

/// <reference types="node" />
import { FileProperties, FileStats, PathStats, JsonLoaderError, JsonLoader,
         Locale } from "jec-commons";
import * as fs from "fs";

export class FilePropertiesBuilder {    constructor();    build(file: string, path: string, stats: FileStats): FileProperties;}/// <reference types="node" />export class FileStatsProxy implements FileStats {    constructor(stats: fs.Stats);    private _fsStats;    private initObj(stats);    readonly dev: number;    readonly ino: number;    readonly mode: number;    readonly nlink: number;    readonly uid: number;    readonly gid: number;    readonly rdev: number;    readonly size: number;    readonly blksize: number;    readonly blocks: number;    readonly atime: Date;    readonly mtime: Date;    readonly ctime: Date;    readonly birthtime: Date;    isFile(): boolean;    isDirectory(): boolean;    isBlockDevice(): boolean;    isCharacterDevice(): boolean;    isSymbolicLink(): boolean;    isFIFO(): boolean;    isSocket(): boolean;}export class WalkPathUtil {    constructor();    walkSync(dirPath: string, process: (file: FileProperties) => void, pathStats?: PathStats): PathStats;}export interface LocaleManager {    init(locale: string, options?: any): void;    isInitialized(): boolean;    getLocale(): Locale;    getDirectory(): string;    get(key: string, ...replace: string[]): string;}export class LocaleManagerBase implements LocaleManager {    constructor();    private _directory;    private _initialized;    private _locale;    private _bundle;    private _formatter;    private initObj();    init(locale: string, options?: any): void;    isInitialized(): boolean;    getLocale(): Locale;    getDirectory(): string;    get(key: string, ...replace: string[]): string;}export class LocaleParser {    constructor();    parse(locale: string): Locale;}export class MessageFormatter {    constructor();    format(message: string, ...replace: string[]): string;}export enum MessageFormatterStringsEnum {    PERCENT = "%",}export class ResourceBundle {    constructor();    private _locale;    private _properties;    private loadResource();    private resolveKey(key);    directory: string;    getLocale(): Locale;    setLocale(locale: Locale): void;    getString(key: string): string;}export enum ResourceBundleStringsEnum {    DOT = ".",    JSON = ".json",}export class DefaultJsonLoader implements JsonLoader {    constructor();    encodingFormat: string;    loadSync(path: string): any;    load(path: string, success: (data: any) => void, error: (err: JsonLoaderError) => void): void;}}