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

import {vsprintf} from "sprintf-js";
import {MessageFormatterStringsEnum} from "./MessageFormatterStringsEnum";

/**
 * The <code>MessageFormatter</code> class enables users to produce
 * concatenated, language-neutral messages. 
 */
export class MessageFormatter {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>MessageFormatter</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Formats the message by substituting the data into the format string and
   * returns the formatted string
   * 
   * @param {string} message the message to format.
   * @param {Array<string>} replace a list of optional strings that will used to
   *                                to replace percent (<code>%</code>) signs in
   *                                the desired string.
   * @return {string} the string for the given key.
   */
  public format(message:string, ...replace:string[]):string {
    if(message.indexOf(MessageFormatterStringsEnum.PERCENT) !== -1 &&
       replace &&
       replace.length > 0) {
      message = vsprintf(message, replace);
    }
    return message;
  }
}