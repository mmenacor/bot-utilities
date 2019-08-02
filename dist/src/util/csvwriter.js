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
class CrearCsv {
    createCsv(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Comienza la creación del csv");
            const createCsvWriter = require('csv-writer').createObjectCsvWriter;
            const csvWriter = createCsvWriter({
                path: 'out.csv',
                fieldDelimiter: ';',
                header: [
                    { id: 'texto', title: 'texto' },
                    { id: 'clase', title: 'clase' },
                    { id: 'guess', title: 'guess' },
                    { id: 'correct', title: 'correct' },
                    { id: 'confidence', title: 'confidence' }
                ]
            });
            yield csvWriter.writeRecords(data)
                .then(() => console.log('The CSV file was written successfully'))
                .catch(() => console.error('ERROR'));
        });
    }
}
exports.CrearCsv = CrearCsv;
//# sourceMappingURL=csvwriter.js.map