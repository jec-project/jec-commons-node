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

import { TestSuite, Test, TestSorters, BeforeAll, AfterAll, Async } from "jec-juta";
import { expect, assert } from "chai";
import { JsonLoader, JsonLoaderError } from "jec-commons";
import { DefaultJsonLoader } from "../../../../../../src/com/jec/commons/node/lang/DefaultJsonLoader";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/JsonLoaderTestUtils";

@TestSuite({
  description: "Test the DefaultJsonLoader class methods",
  testOrder: TestSorters.ORDER_ASCENDING
})
export class DefaultJsonLoaderTest {

  private loader:JsonLoader = null;

  @BeforeAll()
  public initTest():void {
    this.loader = new DefaultJsonLoader();
  }

  @AfterAll()
  public resetTest():void {
    this.loader = null;
  }

  @Test({
    description: "should throw an error when path is not valid",
    order: 0
  })
  public loadSyncInvalidPathTest():void {
    let loadInvalidFilePath:Function = function():void {
      this.loader.loadSync(utils.INVALID_FILE_PATH);
    };
    assert.throws(loadInvalidFilePath.bind(this), Error);
  }

  @Test({
    description: "should throw an error when JSON file is not valid",
    order: 1
  })
  public loadSyncInvalidFileTest():void {
    let loadInvalidFile:Function = function():void {
      this.loader.loadSync(utils.INVALID_FILE);
    };
    assert.throws(loadInvalidFile.bind(this), Error);
  }

  @Test({
    description: "should throw an error when path is not valid",
    order: 2
  })
  public loadAsyncInvalidPathTest(@Async done:Function):void {
    this.loader.load(utils.INVALID_FILE_PATH,
      (data:any) => {
        assert.fail("ok", "ko", "Exception not thrown");
      },
      (err:JsonLoaderError) => {
        expect(err).to.not.be.null;
        done();
      }
    );
  }

  @Test({
    description: "should throw an error when JSON file is not valid",
    order: 3
  })
  public loadAsyncInvalidFileTest(@Async done:Function):void {
    this.loader.load(utils.INVALID_FILE,
      (data:any) => {
        assert.fail("ok", "ko", "Exception not thrown");
      },
      (err:JsonLoaderError) => {
        expect(err).to.not.be.null;
        done();
      }
    );
  }

  @Test({
    description: "should return a valid JavaScript Object",
    order: 4
  })
  public loadFileTest():void {
    let result:any = this.loader.loadSync(utils.VALID_FILE);
    expect(result).that.is.an("object");
  }

  @Test({
    description: "should return a JavaScript Object with expected values",
    order: 5
  })
  public loadFileValidValuesTest():void {
    let result:any = this.loader.loadSync(utils.VALID_FILE);
    expect(result).to.have.property(utils.J_STRING, utils.STRING);
    expect(result).to.have.property(utils.J_NUMBER, utils.NUMBER);
    expect(result).to.have.property(utils.J_OBJECT)
                  .that.is.an("object").that.deep.equals(utils.OBJECT);
    expect(result).to.have.property(utils.J_ARRAY)
                  .that.is.an("array").that.deep.equals(utils.ARRAY);
    expect(result).to.have.property(utils.J_BOOLEAN, utils.BOOLEAN);
    expect(result).to.have.property(utils.J_NULL, null);
  }

  @Test({
    description: "should return a valid JavaScript Object",
    order: 6
  })
  public loadAsyncTest(@Async done:Function):void {
    this.loader.load(utils.VALID_FILE,
      (data:any) => {
        expect(data).that.is.an("object");
        done();
      },
      (err:JsonLoaderError) => {
        assert.fail("ok", "ko", "Exception not thrown");
      }
    );
  }

  @Test({
    description: "should return a valid JavaScript Object with expected values",
    order: 7
  })
  public loadAsyncValidValuesTest(@Async done:Function):void {
    this.loader.load(utils.VALID_FILE,
      (data:any) => {
        expect(data).to.have.property(utils.J_STRING, utils.STRING);
        expect(data).to.have.property(utils.J_NUMBER, utils.NUMBER);
        expect(data).to.have.property(utils.J_OBJECT)
                    .that.is.an("object").that.deep.equals(utils.OBJECT);
        expect(data).to.have.property(utils.J_ARRAY).that.is.an("array")
                    .that.deep.equals(utils.ARRAY);
        expect(data).to.have.property(utils.J_BOOLEAN, utils.BOOLEAN);
        expect(data).to.have.property(utils.J_NULL, null);
        done();
      },
      (err:JsonLoaderError) => {
        assert.fail("ok", "ko", "Exception not thrown");
      }
    );
  }
}
