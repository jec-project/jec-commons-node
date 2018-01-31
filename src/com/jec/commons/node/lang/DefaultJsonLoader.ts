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

import * as fs from "fs";
import {EncodingFormat, JsonLoaderError, JsonLoader} from "jec-commons";

/**
 * A utility class for loading JSON files.
 */
export class DefaultJsonLoader implements JsonLoader {

  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JsonLoader</code> instance.
   */
  constructor() {}

  ////////////////////////////////////////////////////////////////////////////
  // Public properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public encodingFormat:EncodingFormat = EncodingFormat.UTF8;

  ////////////////////////////////////////////////////////////////////////////
  // Public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public loadSync(path:string):any {
    let loadedString:string = null;
    let json:any = null;
    try {
      loadedString = fs.readFileSync(path, this.encodingFormat);
      json = JSON.parse(loadedString);
    } catch(e) {
      throw new JsonLoaderError(e.toString());
    }
    return json;
  }
  
  /**
   * @inheritDoc
   */
  public load(path:string, success:(data:any)=>void,
                                       error:(err:JsonLoaderError)=>void):void {
    let json:Object = null;
    fs.readFile(path, (err:Error, data:Buffer)=> {
      if(err) error(new JsonLoaderError(err.toString()));
      else {
        try {
          json = JSON.parse(data.toString(this.encodingFormat));
          success(json);
        } catch(e) {
          error(new JsonLoaderError(e.toString()));
        }
      }
    });
  }
};
