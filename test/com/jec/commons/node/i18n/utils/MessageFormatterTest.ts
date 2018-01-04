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

import { TestSuite, Test, TestSorters, BeforeAll, AfterAll } from "jec-juta";
import { expect } from "chai";
import { MessageFormatter } from "../../../../../../../src/com/jec/commons/node/i18n/utils/MessageFormatter";

import * as utils from "../../../../../../../utils/test-utils/utilities/ResourceBundleTestUtils";

@TestSuite({
  description: "Test the MessageFormatter class methods"
})
export class MessageFormatterTest {

  @Test({
    description: "should return a string with the correct character substitution"
  })
  public formatTest():void {
    let formatter:MessageFormatter = new MessageFormatter();
    expect(
      formatter.format(utils.RAW_STRING, utils.REPLACE_STRING)
    ).to.equal(utils.RESULT);
  }
}