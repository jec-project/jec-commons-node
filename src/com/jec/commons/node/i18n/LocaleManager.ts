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

/**
 * The <code>LocaleManager</code> interface defines the basic set of APIs you
 * must implement to manage the internationalization context for a JEC container
 * built over Node.js.
 */
export interface LocaleManager {
  /**
   * Initializes the singleton.
   *
   * @param {string} locale the current locale for the JEC container.
   * @param {any} options an optional object used to override locale settings
   *                      for the JEC container.
   */
  init(locale:string, options?:any):void;

  /**
   * Returns a boolean value that indicates whether the singleton is initialized 
   * (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the singleton is initialized;
   *                   <code>false</code> otherwise.
   */
  isInitialized():boolean;

  /**
   * Returns the current locale of a JEC container, or <code>null</code> wheter
   * the manager is not initialized.
   *
   * @return {string} the current locale of a JEC container, or
   *                  <code>null</code>.
   */
  getLocale():string;

  /**
   * Returns the directory location for all locales of a JEC container, or
   * <code>null</code> wheter the manager is not initialized.
   *
   * @return {string} the directory location for all locales of a JEC container, 
   *                  or <code>null</code>.
   */
  getDirectory():string;

  /**
   * Returns translated parsed and substituted string from the specified
   * parameters.
   *
   * @param {string} key the reference to the string to localize.
   * @param {string[]} replace the value used for substitution during
   *                           translation.
   * @return {string} a single phrase translated into the current locale.
   */
  get(key:string, ...replace:string[]):string;
}
