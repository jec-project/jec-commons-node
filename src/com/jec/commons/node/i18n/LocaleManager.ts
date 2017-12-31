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

import * as i18n from "i18n";
import {SingletonError} from "jec-commons";

/**
 * The <code>LocaleManager</code> singleton allows to manage the  
 * internationalization context for a JEC container built over Node.js.
 */
export class LocaleManager {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>LocaleManager</code> instance.
   */
  constructor() {
    let msg:string = null;
    let manager:LocaleManager = null;
    if(LocaleManager._locked || LocaleManager.INSTANCE) {
      manager = LocaleManager.getInstance();
      if(manager.isInitialized()) {
        msg = manager.get("errors.singleton", "LocaleManager");
      } else {
        msg = "You cannot create a LocaleManager instance; use getInstance() instead."
      }
      throw new SingletonError(msg);
    }
    LocaleManager._locked = true;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Prevents <code>LocaleManager</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * The <code>LocaleManager</code> singleton instance reference.
   */
  private static INSTANCE:LocaleManager = null;

  /**
   * Indicates whether the <code>LocaleManager</code> singleton has been
   * initialized (<code>true</code>), or not (<code>false</code>).
   */
  private _initialized:boolean = false;

  /**
   * Returns a reference to the <code>LocaleManager</code> singleton.
   *
   * @return {LocaleManager} a reference to the <code>LocaleManager</code>
   *                         singleton.
   */
  public static getInstance():LocaleManager {
    if(LocaleManager.INSTANCE === null) {
      LocaleManager._locked = false;
      LocaleManager.INSTANCE = new LocaleManager();
    }
    return LocaleManager.INSTANCE;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The directory location for all locales of a JEC container.
   */
  private _directory:string = "./public/locales";

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes the singleton.
   *
   * @param {string} locale the current locale for the JEC container.
   * @param {any} options an optional object used to override locale settings
   *                      for the JEC container.
   */
  public init(locale:string, options?:any):void {
    if(locale) {
      let config:any = {
        locales: [locale],
        defaultLocale: locale,
        directory: this._directory,
        objectNotation: true
      };
      if(options) {
        config = Object.assign({}, config, options);
        this._directory = config.directory;
      }
      i18n.configure(config);
      this._initialized = true;
    }
    else this._initialized = false;
  }

  /**
   * Returns a boolean value that indicates whether the singleton is initialized 
   * (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the singleton is initialized;
   *                   <code>false</code> otherwise.
   */
  public isInitialized():boolean {
    return this._initialized;
  }

  /**
   * Returns the current locale of a JEC container, or <code>null</code> wheter
   * the manager is not initialized.
   *
   * @return {string} the current locale of a JEC container, or
   *                  <code>null</code>.
   */
  public getLocale():string {
    return this._initialized ? i18n.getLocale() : null;
  }

  /**
   * Returns the directory location for all locales of a JEC container, or
   * <code>null</code> wheter the manager is not initialized.
   *
   * @return {string} the directory location for all locales of a JEC container, 
   *                  or <code>null</code>.
   */
  public getDirectory():string {
    return this._directory;
  }

  /**
   * Returns translated parsed and substituted string from the specified
   * parameters.
   *
   * @param {string} key the reference to the string to localize.
   * @param {string[]} replace the value used for substitution during
   *                           translation.
   * @return {string} a single phrase translated into the current locale.
   */
  public get(key:string, ...replace:string[]):string {
    let result:string = null;
    if(this._initialized) result = i18n.__(key, ...replace);
    return result;
  }
}
