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

import {EncodingFormat, JsonLoaderError, JsonLoader, Singleton, SingletonError,
        GlobalGuidGenerator} from "jec-commons";
import {DefaultJsonLoader} from "./DefaultJsonLoader";

/**
 * A singleton implementation of the <code>JsonLoader</code> interface that
 * proxifies a the default <code>JsonLoader</code> object. 
 */
export class GlobalJsonLoader implements JsonLoader, Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlobalJsonLoader</code> instance.
   */
  constructor() {
    if(GlobalJsonLoader._locked || GlobalJsonLoader.INSTANCE) {
      throw new SingletonError(GlobalJsonLoader);
    }
    GlobalJsonLoader._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>GlobalJsonLoader</code> singleton instance reference.
   */
  private static INSTANCE:GlobalJsonLoader = null;

  /**
   * Prevents <code>GlobalJsonLoader</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>GlobalJsonLoader</code> singleton.
   *
   * @return {GlobalJsonLoader} a reference to the 
   *                             <code>GlobalJsonLoader<code> singleton.
   */
  public static getInstance():GlobalJsonLoader{
    if(GlobalJsonLoader.INSTANCE === null) {
      GlobalJsonLoader._locked = false;
      GlobalJsonLoader.INSTANCE = new GlobalJsonLoader();
    }
    return GlobalJsonLoader.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The JSON loader for this proxy.
   */
  private _loader:JsonLoader = null;

  /**
   * The GUID for this proxy.
   */
  private _id:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._id = GlobalGuidGenerator.getInstance().generate();
    this._loader = new DefaultJsonLoader();
  }

  ////////////////////////////////////////////////////////////////////////////
  // Public properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public set encodingFormat(encodingFormat:EncodingFormat) {
    this._loader.encodingFormat = encodingFormat;
  }

  ////////////////////////////////////////////////////////////////////////////
  // Public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public loadSync(path:string):any {
    return this._loader.loadSync(path);
  }
  
  /**
   * @inheritDoc
   */
  public load(path:string, success:(data:any)=>void,
                                       error:(err:JsonLoaderError)=>void):void {
    this._loader.load(path, success, error);
  }

  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
};
