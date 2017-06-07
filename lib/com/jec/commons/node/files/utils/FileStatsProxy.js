"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileStatsProxy {
    constructor(stats) {
        this._fsStats = null;
        this.initObj(stats);
    }
    initObj(stats) {
        this._fsStats = stats;
    }
    get dev() {
        return this._fsStats.dev;
    }
    get ino() {
        return this._fsStats.ino;
    }
    get mode() {
        return this._fsStats.mode;
    }
    get nlink() {
        return this._fsStats.nlink;
    }
    get uid() {
        return this._fsStats.uid;
    }
    get gid() {
        return this._fsStats.gid;
    }
    get rdev() {
        return this._fsStats.rdev;
    }
    get size() {
        return this._fsStats.size;
    }
    get blksize() {
        return this._fsStats.blksize;
    }
    get blocks() {
        return this._fsStats.blocks;
    }
    get atime() {
        return this._fsStats.atime;
    }
    get mtime() {
        return this._fsStats.mtime;
    }
    get ctime() {
        return this._fsStats.ctime;
    }
    get birthtime() {
        return this._fsStats.birthtime;
    }
    isFile() {
        return this._fsStats.isFile();
    }
    isDirectory() {
        return this._fsStats.isDirectory();
    }
    isBlockDevice() {
        return this._fsStats.isBlockDevice();
    }
    isCharacterDevice() {
        return this._fsStats.isCharacterDevice();
    }
    isSymbolicLink() {
        return this._fsStats.isSymbolicLink();
    }
    isFIFO() {
        return this._fsStats.isFIFO();
    }
    isSocket() {
        return this._fsStats.isSocket();
    }
}
exports.FileStatsProxy = FileStatsProxy;
