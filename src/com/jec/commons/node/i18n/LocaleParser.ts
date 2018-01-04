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

import {Locale, LocaleBuilder} from "jec-commons";
import * as bcp47 from "bcp47";

/**
 * A utility class for IETF BCP 47 locales from a loaded boostrap configuration
 * file.
 */
export class LocaleParser {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>LocaleParser</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Parses the string representation of a locale and returns  the
   * <code>Locale</code> instance built from the specified data.
   * 
   * @param {string} locale the string representation of a locale.
   * @return {Locale} a <code>Locale</code> instance built from the specified
   *                  data.
   */
  public parse(locale:string):Locale {
    let langtag:any = bcp47.parse(locale).langtag;
    let builder:LocaleBuilder = new LocaleBuilder();
    let result:Locale = builder.setLanguage(langtag.language.language)
                               .setScript(langtag.script)
                               .setRegion(langtag.region)
                               .build();
    return result;
  }
}
