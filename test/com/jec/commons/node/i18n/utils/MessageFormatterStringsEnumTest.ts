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

import { TestSuite, Test } from "jec-juta";
import { expect } from "chai";
import { MessageFormatterStringsEnum } from "../../../../../../../src/com/jec/commons/node/i18n/utils/MessageFormatterStringsEnum";

import * as utils from "../../../../../../../utils/test-utils/utilities/MessageFormatterStringsEnumTestUtils";

@TestSuite({
  description: "Test the MessageFormatterStringsEnum class properties"
})
export class MessageFormatterStringsEnumTest {

  @Test({
    description: "PERCENT should return '%'",
  })
  public PERCENTTest():void {
    expect(MessageFormatterStringsEnum.PERCENT).to.equal(utils.PERCENT);
  }
}