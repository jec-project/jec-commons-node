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
import { JsonLoaderError } from "jec-commons";

// Class to test:
import { ResourceBundle } from "../../../../../../../src/com/jec/commons/node/i18n/utils/ResourceBundle";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/ResourceBundleTestUtils";

// Test:
describe("Test the ResourceBundle class methods", ()=>{
  
  let bundle:ResourceBundle = null;

  before(()=>{
    bundle = new ResourceBundle();
  });

  after(()=>{
    bundle = null;
  });

  it("should throw a 'JsonLoaderError' exception when the 'directory' property is 'null'", ()=>{
    const invalidLocalePath:Function = function():void {
      bundle.setLocale(utils.EN_US_LOCALE);
    };
    expect(invalidLocalePath.bind(this)).to.throw(JsonLoaderError);
  });

  it("should load a resource bundle from the specified directory", ()=>{
    bundle.directory = utils.DIRECTORY;
    expect(bundle.setLocale(utils.EN_US_LOCALE)).to.be.undefined;
  });

  it("should return the 'Locale' object set by the 'setLocale()' property", ()=>{
    expect(bundle.getLocale()).to.equal(utils.EN_US_LOCALE);
  });

  it("should return the string for the specified key", ()=>{
    expect(bundle.getString(utils.VALID_KEY)).to.equal(utils.RAW_STRING);
  });
  
  it("should return the same string as passed as the key parameter", ()=>{
    expect(
      bundle.getString(utils.INVALID_KEY)
    ).to.equal(utils.INVALID_KEY);
  });
});


  