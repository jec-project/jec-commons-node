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

import * as path from "path";
import {Locale} from "jec-commons";
import {GlobalJsonLoader} from "../../lang/GlobalJsonLoader";
import {ResourceBundleStringsEnum} from "./ResourceBundleStringsEnum";

/**
 * The <code>ResourceBundle</code> class implements access to locale-specific
 * objects.
 */
export class ResourceBundle {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ResourceBundle</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The current locale for this <code>ResourceBundle</code> object.
   */
  private _locale:Locale = null;

  /**
   * The properties tree as defined in the loaded resource bundle.
   */
  private _properties:any = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Loads the resource bundle identified by the current locale.
   */
  private loadResource():void {
    let filepath = path.normalize(
      this.directory + path.sep +
      this._locale.toString() + ResourceBundleStringsEnum.JSON
    );
    this._properties = GlobalJsonLoader.getInstance().loadSync(filepath);
  }

  /**
   * Traverses the structure of the resource bundle and returns the value that
   * corresponds to the specified key.
   * 
   * @param {string} key the key that specifies the value to find.
   * @return {string} the value that corresponds to the specified key, or the
   *                  <code>key</code> whether the value is not valid.
   */
  private resolveKey(key:string):string {
    let result:any = this._properties;
    let keys:string[] = key.split(ResourceBundleStringsEnum.DOT);
    let len:number = keys.length - 1;
    let i:number = 0;
    let currKey:string = null;
    for(; i <= len; ++i) {
      currKey = keys[i];
      if(result.hasOwnProperty(currKey)) {
        result = result[currKey];
      } else {
        result = key;
        break;
      }
    }
    return result.toString();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The path to the directory where resource files are stored.
   */
  public directory:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the locale for this <code>ResourceBundle</code> object.
   * 
   * @return {Locale} the locale for this <code>ResourceBundle</code> object.
   */
  public getLocale():Locale {
    return this._locale;
  }

  /**
   * Sets the locale for this <code>ResourceBundle</code> object.
   * 
   * @param {Locale} locale the locale for this <code>ResourceBundle</code>
   *                        object.
   */
  public setLocale(locale:Locale):void {
    this._locale = locale;
    if(locale) {
      this.loadResource();
    } else {
      this._properties = null;
    }
  }
  
  /**
   * Gets a string for the given key from this <code>ResourceBundle</code>
   * object.
   * 
   * @param {Locale} key the key for the desired string.
   * @return {string} the string for the given key.
   */
  public getString(key:string):string {
    return this.resolveKey(key);
  }
}