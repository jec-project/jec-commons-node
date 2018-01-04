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
import { LocaleManager } from "../../../../../../src/com/jec/commons/node/i18n/LocaleManager";
import { LocaleManagerBase } from "../../../../../../src/com/jec/commons/node/i18n/LocaleManagerBase";
import { SingletonError } from "jec-commons";

import * as utils from "../../../../../../utils/test-utils/utilities/LocaleManagerBaseTestUtils";

@TestSuite({
  description: "Test the LocaleManagerBase class methods",
  testOrder: TestSorters.ORDER_ASCENDING
})
export class LocaleManagerBaseTest {
  
  private manager:LocaleManager = null;

  @BeforeAll()
  public initTest():void {
    this.manager = new LocaleManagerBase();
  }

  @AfterAll()
  public resetTest():void {
    this.manager = null;
  }

  @Test({
    description: "should return 'false' when the manager is not initialized",
    order: 0
  })
  public isInitializedFalseTest():void {
    expect(this.manager.isInitialized()).to.be.false;
  }

  @Test({
    description: "should return 'null' when no locale is defined",
    order: 1
  })
  public getLocaleNullTest():void {
    expect(this.manager.getLocale()).to.be.null;
  }
  
  @Test({
    description: "should return './public/locales' when no locale is defined",
    order: 2
  })
  public getDefaultDirectorTest():void {
    expect(
      this.manager.getDirectory()).to.equal("./public/locales");
  }
  
  @Test({
    description: "should initialize the manager",
    order: 3
  })
  public initManagerTest():void {
    expect(this.manager.init(utils.LOCALE, utils.TEST_CONFIG)).to.be.OK;
  }

  @Test({
    description: "should return 'true' when the manager is initialized",
    order: 4
  })
  public isInitializedTest():void {
    expect(this.manager.isInitialized()).to.be.true;
  }

  @Test({
    description: "should return the same locale string as used for initialization",
    order: 5
  })
  public getLocaleTest():void {
    expect(this.manager.getLocale().toString()).to.equal(utils.LOCALE);
  }
  
  @Test({
    description: "should return the same directory as used for initialization",
    order: 6
  })
  public getDirectoryTest():void {
    expect(
      this.manager.getDirectory()
    ).to.equal(utils.TEST_CONFIG.directory);
  }

  @Test({
    description: "should return the phrase associated with the specified key",
    order: 7
  })
  public getKeyTest():void {
    expect(
      this.manager.get(utils.HELLO_WORLD_KEY)
    ).to.equal(utils.HELLO_WORLD);
  }
  
  @Test({
    description: "should return a phrase with the correct substitued values",
    order: 8
  })
  public getParamsTest():void {
    expect(
      this.manager
                   .get(utils.HELLO_WORLD_NAME, utils.HELLO_WORLD_PARAM)
    ).to.equal(utils.HELLO_JOHN_DOE);
  }
  
  @Test({
    description: "should reset the manager",
    order: 9
  })
  public initNullTest():void {
    this.manager.init(null);
  }

  @Test({
    description: "should return 'false' ",
    order: 10
  })
  public isInitializedResetFalseTest():void {
    expect(this.manager.isInitialized()).to.be.false;
  }
  
  @Test({
    description: "should return 'null'",
    order: 11
  })
  public getLocaleResetTest():void {
    expect(this.manager.getLocale()).to.be.null;
  }
}