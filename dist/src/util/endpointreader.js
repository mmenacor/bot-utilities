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
const fs = require("fs").promises;
class ConfigurationtReader {
    getUtterances(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let arrUtterances;
            try {
                let content = yield fs.readFile(path);
                let jsonFile = JSON.parse(content);
                arrUtterances = jsonFile.utterances.map((utterance) => {
                    let objUtterances = {
                        text: utterance.text,
                        intent: utterance.intent
                    };
                    return objUtterances;
                });
            }
            catch (err) {
                console.error("Error" + err);
            }
            return arrUtterances;
        });
    }
    getModels(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let arrApps;
            try {
                let content = yield fs.readFile(path);
                let jsonFile = JSON.parse(content);
                arrApps = jsonFile.endpoints.map((endpoint) => {
                    let objApps = {
                        name: endpoint.name,
                        appID: endpoint.appID
                    };
                    return objApps;
                });
            }
            catch (err) {
                console.error("Error" + err);
            }
            return arrApps;
        });
    }
}
exports.ConfigurationtReader = ConfigurationtReader;
//# sourceMappingURL=endpointreader.js.map