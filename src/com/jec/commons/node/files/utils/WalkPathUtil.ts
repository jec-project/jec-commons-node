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

import {FileProperties, JecStringsEnum, UrlStringsEnum, PathStats} from "jec-commons";
import {FilePropertiesBuilder} from "./FilePropertiesBuilder";
import * as fs from "fs";

/**
 * A helper class that lists all files in a directory.
 */
export class WalkPathUtil {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>WalkPathUtil</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Recursively finds all files in the specified directory.
   * 
   * @param {string} path the path to the directory where to find all files.
   * @param {Function} process the callback method used to process files found
   *                           in the specified directory.
   * @param {PathStats} pathStats a <code>PathStats</code> instance passed by
   *                              recursion.
   * @return {PathStats} an object that concatenates statistics for all files
   *                     in the specified path.
   */
  public walkSync(path:string, process:(file:FileProperties)=>void,
                                         pathStats:PathStats = null):PathStats {
    let pathStatsResult:PathStats = pathStats || new PathStats(path);
    let files:string[] = fs.readdirSync(path);
    let stats:fs.Stats = null;
    let currPath:string = null;
    let fileProps:FileProperties = null;
    let extPos:number = -1;
    let filelength:number = -1;
    let rawFile:string = null;
    let extension:string = UrlStringsEnum.DOT + JecStringsEnum.JS_EXTENSION;
    let builder:FilePropertiesBuilder = new FilePropertiesBuilder();
    files.forEach((file:string)=> {
      currPath = path + UrlStringsEnum.SLASH + file;
      stats = fs.statSync(currPath);
      if(stats.isDirectory()) {
        pathStatsResult.directoriesNum++;
        this.walkSync(currPath, process, pathStatsResult);
      } else {
        filelength = file.length;
        extPos = filelength - 3;
        pathStatsResult.filesNum++;
        if(file.lastIndexOf(extension) === extPos) {
          pathStatsResult.processedFilesNum++;
          fileProps = builder.build(file, currPath, stats);
          process(fileProps);
        }
      }
    });
    return pathStatsResult;
  }
};
