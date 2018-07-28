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

import { expect } from "chai";
import { LocaleManager } from "../../../../../../src/com/jec/commons/node/i18n/LocaleManager";

// Class to test:
import { LocaleManagerBase } from "../../../../../../src/com/jec/commons/node/i18n/LocaleManagerBase";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/LocaleManagerBaseTestUtils";

// Test:
describe("Test the LocaleManagerBase class methods", ()=> {

  let manager:LocaleManager = null;

  before(()=> {
    manager = new LocaleManagerBase();
  });

  after(()=> {
    manager = null;
  });

  it("should return 'false' when the manager is not initialized", ()=> {
    expect(manager.isInitialized()).to.be.false;
  });

  it("should return 'null' when no locale is defined", ()=> {
    expect(manager.getLocale()).to.be.null;
  });
  
  it("should return './public/locales' when no locale is defined", ()=> {
    expect(
      manager.getDirectory()).to.equal("./public/locales");
    });
  
  it("should initialize the manager", ()=> {
    expect(manager.init(utils.LOCALE, utils.TEST_CONFIG)).to.be.undefined;
  });

  it("should return 'true' when the manager is initialized", ()=> {
    expect(manager.isInitialized()).to.be.true;
  });

  it("should return the same locale string as used for initialization", ()=> {
    expect(manager.getLocale().toString()).to.equal(utils.LOCALE);
  });
  
  it("should return the same directory as used for initialization", ()=> {
    expect(
      manager.getDirectory()
    ).to.equal(utils.TEST_CONFIG.directory);
  });

  it("should return the phrase associated with the specified key", ()=> {
    expect(
      manager.get(utils.HELLO_WORLD_KEY)
    ).to.equal(utils.HELLO_WORLD);
  });
  
  it("should return a phrase with the correct substitued values", ()=> {
    expect(
      manager.get(utils.HELLO_WORLD_NAME, utils.HELLO_WORLD_PARAM)
    ).to.equal(utils.HELLO_JOHN_DOE);
  });
  
  it("should reset the manager", ()=> {
    manager.init(null);
  });

  it("should return 'false' ", ()=> {
    expect(manager.isInitialized()).to.be.false;
  });
  
  it("should return 'null'", ()=> {
    expect(manager.getLocale()).to.be.null;
  });
});