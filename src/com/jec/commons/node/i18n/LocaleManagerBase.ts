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
import {LocaleManager} from "./LocaleManager";
import {LocaleParser} from "./LocaleParser";
import {Locale} from "jec-commons";

/**
 * The <code>LocaleManagerBase</code> class is the default implementation of the
 * <code>LocaleManager</code> interface.
 */
export class LocaleManagerBase implements LocaleManager {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>LocaleManagerBase</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The directory location for all locales of a JEC container.
   */
  private _directory:string = "./public/locales";

  /**
   * Indicates whether this <code>LocaleManager</code> object has been
   * initialized (<code>true</code>), or not (<code>false</code>).
   */
  private _initialized:boolean = false;

  /**
   * The current locale for this <code>LocaleManager</code> object.
   */
  private _locale:Locale = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public init(locale:string, options?:any):void {
    let config:any = null;
    let parser:LocaleParser = null;
    if(locale) {
      config = {
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
      parser = new LocaleParser();
      this._locale = parser.parse(locale);
      this._initialized = true;
    } else {
      this._locale = null;
      this._initialized = false;
    }
  }

  /**
   * @inheritDoc
   */
  public isInitialized():boolean {
    return this._initialized;
  }

  /**
   * @inheritDoc
   */
  public getLocale():Locale {
    return this._locale;
  }

  /**
   * @inheritDoc
   */
  public getDirectory():string {
    return this._directory;
  }

  /**
   * @inheritDoc
   */
  public get(key:string, ...replace:string[]):string {
    let result:string = null;
    if(this._initialized) result = i18n.__(key, ...replace);
    return result;
  }
}
