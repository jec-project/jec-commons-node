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
import { PathStats, FileProperties } from "jec-commons";

// Class to test:
import { WalkPathUtil } from "../../../../../../../src/com/jec/commons/node/files/utils/WalkPathUtil";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/WalkPathUtilTestUtils";

// Test:
describe("Test the WalkPathUtilTest class methods", ()=> {

  let pathUtil:WalkPathUtil = null;
  let processedFiles:number = 0;
  let stats:PathStats = null;

  before(()=> {
    pathUtil = new WalkPathUtil();
    processedFiles = 0;
  });

  after(()=> {
    pathUtil = null;
    processedFiles = 0;
    stats = null;
  });

  it("should return the same instance of PathStats as passed as the 'pathStats' parameter", ()=>{
    stats = pathUtil.walkSync(
      utils.VALID_EMPTY_PATH,
      (file:FileProperties)=> {
        processedFiles++;
        },
      utils.PATH_STATS
    );
    expect(stats).to.equal(utils.PATH_STATS);
  });

  it("should return an instance of PathStats", ()=>{
    stats = pathUtil.walkSync(
      utils.VALID_PATH,
      (file:FileProperties)=> {
        processedFiles++;
      }
    );
    expect(stats).to.be.an.instanceOf(PathStats);
  });

  it("PathStats.getPath() should return the specified path", ()=>{
    expect(stats.getPath()).to.equal(utils.VALID_PATH);
  });

  it("PathStats.directoriesNum should return the right number of directories in the specified path", ()=>{
    expect(stats.directoriesNum).to.equal(utils.NUM_DIRS);
  });

  it("PathStats.filesNum should return the right number of files in the specified path", ()=>{
    expect(stats.filesNum).to.equal(utils.NUM_FILES);
  });

  it("PathStats.processedFilesNum should return the right number of processed files in the specified path", ()=>{
    expect(processedFiles).to.equal(stats.processedFilesNum);
  });
});
