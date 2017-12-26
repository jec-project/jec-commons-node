/*!
 * JEC Node.js Commons Module
 * Copyright(c) 2017 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-commons-node" {

/// <reference types="node" />
import { FileProperties, FileStats, PathStats } from "jec-commons";
import * as fs from "fs";

export class FilePropertiesBuilder {