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
class CreateConfusionMatrix {
    constructor(confidencebuilder) {
        this.confidencebuilder = confidencebuilder;
    }
    build(utterances, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const createCsvWriter = require('csv-writer').createObjectCsvWriter;
            let confidences = yield this.confidencebuilder.build(utterances);
            console.log("Comienza la creación del csv");
            const csvWriter = createCsvWriter({
                path: filename,
                fieldDelimiter: ';',
                header: [
                    { id: 'texto', title: 'texto' },
                    { id: 'clase', title: 'clase' },
                    { id: 'guess', title: 'guess' },
                    { id: 'correct', title: 'correct' },
                    { id: 'confidence', title: 'confidence' }
                ]
            });
            return csvWriter.writeRecords(confidences);
        });
    }
}
exports.CreateConfusionMatrix = CreateConfusionMatrix;
//# sourceMappingURL=confusionmatrixbuilder.js.map