//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {FileStats} from "jec-commons";
import * as fs from "fs";

/**
 * A utility class that creates proxy objects for the <code>fs.Stats</code> API.
 */
export class FileStatsProxy implements FileStats {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Creates a new <code>FileStatsProxy</code> instance.
   * 
   * @param {fs.Stats} stats the <code>fs.Stats</code> object to wrap.
   */
  constructor(stats:fs.Stats) {
    this.initObj(stats);
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The reference to the proxy object.
   */
  private _fsStats:fs.Stats = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   * 
   * @param {fs.Stats} stats the <code>fs.Stats</code> object to wrap.
   */
  private initObj(stats:fs.Stats):void {
    this._fsStats = stats;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public getter properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public get dev():number {
    return  this._fsStats.dev;
  }

  /**
   * @inheritDoc
   */
  public get ino():number {
    return  this._fsStats.ino;
  }

  /**
   * @inheritDoc
   */
  public get mode():number {
    return  this._fsStats.mode;
  }
  
  /**
   * @inheritDoc
   */
  public get nlink():number {
    return  this._fsStats.nlink;
  }
  
  /**
   * @inheritDoc
   */
  public get uid():number {
    return  this._fsStats.uid;
  }

  /**
   * @inheritDoc
   */
  public get gid():number {
    return  this._fsStats.gid;
  }
 
  /**
   * @inheritDoc
   */
  public get rdev():number {
    return  this._fsStats.rdev;
  }
  
  /**
   * @inheritDoc
   */
  public get size():number {
    return  this._fsStats.size;
  }
  
  /**
   * @inheritDoc
   */
  public get blksize():number {
    return  this._fsStats.blksize;
  }
 
  /**
   * @inheritDoc
   */
  public get blocks():number {
    return  this._fsStats.blocks;
  }
 
  /**
   * @inheritDoc
   */
  public get atime():Date {
    return  this._fsStats.atime;
  }
  
  /**
   * @inheritDoc
   */
  public get mtime():Date {
    return  this._fsStats.mtime;
  }
 
  /**
   * @inheritDoc
   */
  public get ctime():Date {
    return  this._fsStats.ctime;
  }
 
  /**
   * @inheritDoc
   */
  public get birthtime():Date {
    return  this._fsStats.birthtime;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public isFile():boolean {
    return this._fsStats.isFile();
  }

  /**
   * @inheritDoc
   */
  public isDirectory():boolean {
    return this._fsStats.isDirectory();
  }

  /**
   * @inheritDoc
   */
  public isBlockDevice():boolean {
    return this._fsStats.isBlockDevice();
  }

  /**
   * @inheritDoc
   */
  public isCharacterDevice():boolean {
    return this._fsStats.isCharacterDevice();
  }

  /**
   * @inheritDoc
   */
  public isSymbolicLink():boolean {
    return this._fsStats.isSymbolicLink();
  }

  /**
   * @inheritDoc
   */
  public isFIFO():boolean {
    return this._fsStats.isFIFO();
  }
  
  /**
   * @inheritDoc
   */
  public isSocket():boolean {
    return this._fsStats.isSocket();
  }
}
