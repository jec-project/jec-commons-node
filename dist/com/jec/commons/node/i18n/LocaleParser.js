"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
const bcp47 = require("bcp47");
class LocaleParser {
    constructor() { }
    parse(locale) {
        const langtag = bcp47.parse(locale).langtag;
        const builder = new jec_commons_1.LocaleBuilder();
        let result = builder.setLanguage(langtag.language.language)
            .setScript(langtag.script)
            .setRegion(langtag.region)
            .build();
        return result;
    }
}
exports.LocaleParser = LocaleParser;
