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

import { TestSuite, Test, Before, AfterAll, BeforeAll, TestSorters } from "jec-juta";
import { expect } from "chai";
import { PathStats, FileProperties } from "jec-commons";
import { WalkPathUtil } from "../../../../../../../src/com/jec/commons/node/files/utils/WalkPathUtil";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/WalkPathUtilTestUtils";

@TestSuite({
  description: "Test the WalkPathUtilTest class methods",
  testOrder: TestSorters.ORDER_ASCENDING
})
export class WalkPathUtilTest {

  private pathUtil:WalkPathUtil = null;
  private processedFiles:number = 0;
  private stats:PathStats = null;

  @BeforeAll()
  public initTest():void {
    this.pathUtil = new WalkPathUtil();
    this.processedFiles = 0;
  }

  @AfterAll()
  public resetTest():void {
    this.pathUtil = null;
    this.processedFiles = 0;
    this.stats = null;
  }

  @Test({
    description: "should return the same instance of PathStats as passed as the 'pathStats' parameter",
    order: 0
  })
  public walkSyncPathStatsParameterTest():void {
    this.stats = this.pathUtil.walkSync(
                    utils.VALID_EMPTY_PATH,
                    (file:FileProperties)=> {
                      this.processedFiles++;
                      },
                    utils.PATH_STATS
                  );
    expect(this.stats).to.equal(utils.PATH_STATS);
  }

  @Test({
    description: "should return an instance of PathStats",
    order: 1
  })
  public pathStatsTypeTest():void {
    this.stats = this.pathUtil.walkSync(
                    utils.VALID_PATH,
                    (file:FileProperties)=> {
                      this.processedFiles++;
                    }
                  );
    expect(this.stats).to.be.an.instanceOf(PathStats);
  }

  @Test({
    description: "PathStats.getPath() should return the specified path",
    order: 2
  })
  public getPathTest():void {
    expect(this.stats.getPath()).to.equal(utils.VALID_PATH);
  }

  @Test({
    description: "PathStats.directoriesNum should return the right number of directories in the specified path",
    order: 3
  })
  public directoriesNumTest():void {
    expect(this.stats.directoriesNum).to.equal(utils.NUM_DIRS);
  }

  @Test({
    description: "PathStats.filesNum should return the right number of files in the specified path",
    order: 4
  })
  public filesNumTest():void {
    expect(this.stats.filesNum).to.equal(utils.NUM_FILES);
  }

  @Test({
    description: "PathStats.processedFilesNum should return the right number of processed files in the specified path",
    order: 5
  })
  public processedFilesNumTest():void {
    expect(this.processedFiles).to.equal(this.stats.processedFilesNum);
  }
};
