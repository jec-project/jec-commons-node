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

import { TestSuite, Test, BeforeAll, AfterAll } from "jec-juta";
import { expect } from "chai";
import { LocaleParser } from "../../../../../../src/com/jec/commons/node/i18n/LocaleParser";
import { Locale } from "jec-commons";

import * as utils from "../../../../../../utils/test-utils/utilities/LocaleParserTestUtils";

@TestSuite({
  description: "Test the LocaleParserTest class methods"
})
export class LocaleParserTest {
  
  private parser:LocaleParser = null;

  @BeforeAll()
  public initTest():void {
    this.parser = new LocaleParser();
  }

  @AfterAll()
  public resetTest():void {
    this.parser = null;
  }

  @Test({
    description: "should return a locale based upon the language and the region"
  })
  public parseBasicTest():void {
    let locale:Locale = this.parser.parse(utils.EN_EN);
    expect(locale.getLanguage()).to.equal(utils.EN_EN_LANGUAGE);
    expect(locale.getRegion()).to.equal(utils.EN_EN_REGION);
  }
  
  @Test({
    description: "should return a locale based upon the language, the script and the region"
  })
  public parseComplexTest():void {
    let locale:Locale = this.parser.parse(utils.CMN_HANT_TW);
    expect(locale.getLanguage()).to.equal(utils.CMN_HANT_TW_LANGUAGE);
    expect(locale.getScript()).to.equal(utils.CMN_HANT_TW_SCRIPT);
    expect(locale.getRegion()).to.equal(utils.CMN_HANT_TW_REGION);
  }
}