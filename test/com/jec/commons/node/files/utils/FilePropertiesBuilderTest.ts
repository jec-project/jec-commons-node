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

import { TestSuite, Test, Before, After } from "jec-juta";
import { expect } from "chai";
import { JecStringsEnum, FileProperties, DecoratorProperties,
         BasicDecoratorProperties } from "jec-commons";
import { FilePropertiesBuilder } from "../../../../../../../src/com/jec/commons/node/files/utils/FilePropertiesBuilder";

import * as utils from "../../../../../../../utils/test-utils/utilities/FilePropertiesBuilderTestUtils";

@TestSuite({
  description: "Test the FilePropertiesBuilder class methods"
})
export class FilePropertiesBuilderTest {
  
  private builder:FilePropertiesBuilder = null;
  private properties:FileProperties = null;
  private decoratorProps:DecoratorProperties[] = null;
  
  @Before()
  public initTest():void {
    this.builder = new FilePropertiesBuilder();
    this.properties =
                    this.builder.build(utils.FILE_NAME, utils.FILE_PATH, null);
    this.decoratorProps = this.properties.decorators;
  }

  @After()
  public resetTest():void {
    this.builder = null;
    this.properties = null;
    this.decoratorProps = null;
  }

  @Test({
    description:"should return a FileProperties object with the 'name' property built from the specified file name"
  })
  public nameTest():void {
    expect(this.properties.name).to.equal(utils.PROPERTIES_NAME);
  }
  
  @Test({
    description:"should return a FileProperties object with the 'path' property built from the specified file path"
  })
  public pathTest():void {
    expect(this.properties.path).to.equal(utils.PROPERTIES_PATH);
  }
  
  @Test({
    description:"should return a FileProperties object with the 'extension' property equal to JecStringsEnum.JS_EXTENSION"
  })
  public extensionTest():void {
    expect(this.properties.extension).to.equal(JecStringsEnum.JS_EXTENSION);
  }
  
  @Test({
    description:"should return a FileProperties object with the 'stats' property initialized to 'null'"
  })
  public statsTest():void {
    expect(this.properties.stats).to.be.null;
  }
  
  @Test({
    description:"should return a FileProperties object with the 'content' property which is not 'null'"
  })
  public contentTest():void {
    expect(this.properties.content).not.to.be.null;
  }

  @Test({
    description:"should return a FileProperties object with the 'decorators' property which has a length of '1'"
  })
  public decoratorsTest():void {
    expect(this.properties.decorators).to.have.lengthOf(1);
  }
  
  @Test({
    description:"should contain a DecoratorProperties object built from the specified parameters"
  })
  public buildTest():void {
    let decoratorProp:DecoratorProperties = this. properties.decorators[0];
    expect(decoratorProp).to.be.instanceOf(BasicDecoratorProperties);
    expect(decoratorProp).to.have.property("name", utils.DECORATOR_NAME);
    expect(decoratorProp).to.have.property("classPath", utils.DECORATOR_CLASS_PATH);
    expect(decoratorProp).to.have.property("value", utils.DECORATOR_VALUE);
  }
};
