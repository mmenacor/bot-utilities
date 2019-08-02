"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const transformer_1 = require("../util/transformer");
class ConfidenceBuilder {
    constructor(luisclient) {
        this.luisclient = luisclient;
        this.transformer = new transformer_1.Transformer();
    }
    build(utterances) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield Promise.all(utterances.map((utterance, index, utterances) => __awaiter(this, void 0, void 0, function* () {
                let luisResult = yield this.luisclient.getIntent(utterance.text);
                console.log("UTTERANCES");
                console.log(utterances);
                return this.transformer.transform(luisResult, utterance);
            })));
            return result;
        });
    }
}
exports.ConfidenceBuilder = ConfidenceBuilder;
//# sourceMappingURL=confidencebuilder.js.map