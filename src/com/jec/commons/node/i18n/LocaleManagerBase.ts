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

import {LocaleManager} from "./LocaleManager";
import {LocaleParser} from "./LocaleParser";
import {Locale} from "jec-commons";
import {ResourceBundle} from "./utils/ResourceBundle";
import {MessageFormatter} from "./utils/MessageFormatter";

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
  constructor() {
    this.initObj();
  }

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

  /**
   * The reference to the <code>ResourceBundle</code> instance used by this
   * <code>LocaleManager</code> object.
   */
  private _bundle:ResourceBundle = null;

  /**
   * The reference to the <code>MessageFormatter</code> instance used by this
   * <code>LocaleManager</code> object.
   */
  private _formatter:MessageFormatter = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._formatter = new MessageFormatter();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public init(locale:string, options?:any):void {
    let parser:LocaleParser = null;
    if(locale) {
      if(options) {
        if(options.directory) this._directory = options.directory;
      }
      parser = new LocaleParser();
      this._locale = parser.parse(locale);
      this._bundle = new ResourceBundle();
      this._bundle.directory = this._directory;
      this._bundle.setLocale(this._locale);
      this._initialized = true;
    } else {
      this._bundle = null;
      this._locale = null;
      this._directory = "./public/locales";
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
    if(this._initialized) {
      result = this._bundle.getString(key);
      if(result !== key) {
        result = this._formatter.format(result, ...replace);
      }
    }
    return result;
  }
}
