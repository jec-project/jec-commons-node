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

import "mocha";
import {expect} from "chai";
import {JecStringsEnum, FileProperties, DecoratorProperties, BasicDecoratorProperties} from "jec-commons";

// Class to test:
import {FilePropertiesBuilder} from "../../../../../../../src/com/jec/commons/node/files/utils/FilePropertiesBuilder";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/FilePropertiesBuilderTestUtils";

// Test:
describe("FilePropertiesBuilder", ()=> {

  describe("#build()", ()=> {
    
    let builder:FilePropertiesBuilder = new FilePropertiesBuilder();
    let properties:FileProperties = builder.build(utils.FILE_NAME, utils.FILE_PATH, null);
    let decoratorProps:DecoratorProperties[] = properties.decorators;
    
    it("should return a FileProperties object with the 'name' property built from the specified file name", function() {
      expect(properties.name).to.equal(utils.PROPERTIES_NAME);
    });

    it("should return a FileProperties object with the 'path' property built from the specified file path", function() {
      expect(properties.path).to.equal(utils.PROPERTIES_PATH);
    });

    it("should return a FileProperties object with the 'extension' property equal to JecStringsEnum.JS_EXTENSION", function() {
      expect(properties.extension).to.equal(JecStringsEnum.JS_EXTENSION);
    });

    it("should return a FileProperties object with the 'stats' property initialized to null", function() {
      expect(properties.stats).to.be.null;
    });

    it("should return a FileProperties object with the 'content' property initialized to null", function() {
      expect(properties.content).not.to.be.null;
    });

    /*it("should return a FileProperties object with the 'content' property equal to specified file", function() {
      expect(properties.content).to.equal(FILE);
    });*/

    it("should return a FileProperties object with the 'decorators' property which has a length of 1", function() {
      expect(properties.decorators).to.have.lengthOf(1);
    });

    it("should contain a DecoratorProperties object built from the specified parameters", function() {
      let decoratorProp:DecoratorProperties = properties.decorators[0];
      expect(decoratorProp).to.be.instanceOf(BasicDecoratorProperties);
      expect(decoratorProp).to.have.property("name", utils.DECORATOR_NAME);
      expect(decoratorProp).to.have.property("classPath", utils.DECORATOR_CLASS_PATH);
      expect(decoratorProp).to.have.property("value", utils.DECORATOR_VALUE);
    });
  });
});
