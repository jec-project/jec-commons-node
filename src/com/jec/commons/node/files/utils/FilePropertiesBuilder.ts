//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
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

import {FileProperties, DecoratorParser, BasicFileProperties, JecStringsEnum,
        FileStats} from "jec-commons";
import * as fs from "fs";

/**
 * A utility class that builds <code>FileProperties</code> instances from 
 * decorator strings extracted from class files.
 */
export class FilePropertiesBuilder {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Creates a new <code>FilePropertiesBuilder</code> instance.
   */
  constructor() {}
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Builds and returns a new <code>FileProperties</code> instance from the 
   * specified file.
   * 
   * @param {string} file the class file string from which is extracted the 
   *                      reference to the decorator string to parse.
   * @param {string} path the original path from which the file has been loaded.
   * @return {FileProperties} a new <code>FileProperties<code> instance.
   */
  public build(file:string, path:string, stats:FileStats):FileProperties {
    let fileProps:FileProperties = new BasicFileProperties();
    let filelength:number = file.length;
    let extPos:number = filelength - 3;
    fileProps.name = file.substr(0, extPos);
    fileProps.path = path.substr(0, path.length - filelength);
    fileProps.extension = JecStringsEnum.JS_EXTENSION;
    fileProps.stats = stats;
    let rawFile:string = fs.readFileSync(path).toString();
    fileProps.content = rawFile;
    fileProps.decorators = DecoratorParser.findDecorators(rawFile);
    return fileProps;
  }
}
