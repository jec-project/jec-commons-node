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

import {Locale, LocaleBuilder} from "jec-commons";

/*!
 * This module constains utilities used by the ResourceBundleTest test suite.
 */

// Utilities:
const BUILDER:LocaleBuilder = new LocaleBuilder();
export const EN_US_LOCALE:Locale = BUILDER.setLanguage("en")
                                          .setRegion("US")
                                          .build();
export const DIRECTORY:string = "utils/test-utils/json-utils/locales";
export const VALID_KEY:string = "foo.bar";
export const RAW_STRING:string = "Hello %s!";
export const REPLACE_STRING:string = "World";
export const RESULT:string = "Hello World!";
export const INVALID_KEY:string = "bar.foo";
