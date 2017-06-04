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
import {PathStats, FileProperties} from "jec-commons";

// Class to test:
import {WalkPathUtil} from "../../../../../../../src/com/jec/commons/node/files/utils/WalkPathUtil";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/WalkPathUtilTestUtils";

// Test:
describe("WalkPathUtil", ()=> {

  describe("#walkSync()", ()=> {

    let pathUtil:WalkPathUtil = new WalkPathUtil();
    let processedFiles:number = 0;
    let stats:PathStats = null;

    it("#walkSync() should return the same instance of PathStats as passed as the 'pathStats' parameter", function() {
      stats = pathUtil.walkSync(utils.VALID_EMPTY_PATH, (file:FileProperties)=> {
                processedFiles++;
              }, utils.PATH_STATS);
      expect(stats).to.equal(utils.PATH_STATS);
    });

    it("#walkSync() should return an instance of PathStats", function() {
      stats = pathUtil.walkSync(utils.VALID_PATH, (file:FileProperties)=> {
        processedFiles++;
      });
      expect(stats).to.be.an.instanceOf(PathStats);
    });
    
    it("#PathStats.getPath() should return the specified path", function() {
      expect(stats.getPath()).to.equal(utils.VALID_PATH);
    });

    it("#PathStats.directoriesNum should return the right number of directories in the specified path", function() {
      expect(stats.directoriesNum).to.equal(utils.NUM_DIRS);
    });

    it("#PathStats.filesNum should return the right number of files in the specified path", function() {
      expect(stats.filesNum).to.equal(utils.NUM_FILES);
    });

    it("#PathStats.processedFilesNum should return the right number of processed files in the specified path", function() {
      expect(processedFiles).to.equal(stats.processedFilesNum);
    });
  });
});
