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
const luisclient_1 = require("./clients/luisclient");
const confidencebuilder_1 = require("../src/core/confidencebuilder");
const confusionmatrixbuilder_1 = require("../src/core/confusionmatrixbuilder");
const endpointreader_1 = require("../src/util/endpointreader");
class App {
    createConfusionMatrix() {
        return __awaiter(this, void 0, void 0, function* () {
            var datatests = require('./datatest.js');
            const pathoutput = 'C:/output';
            const pathinput = 'C:/apps';
            var luisConfiguration = {
                baseUrl: "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/",
                modelId: "",
                subscription: "4b23194f66da4f69b15507de38b6f3d5"
            };
            let configurationreader = new endpointreader_1.ConfigurationtReader();
            let appslist = yield configurationreader.getModels(`${pathinput}/appslist.json`);
            for (let app of appslist) {
                function esperar() {
                    console.log("Esperando...");
                }
                luisConfiguration.modelId = app.appID;
                let luisclient = new luisclient_1.LuisClient(luisConfiguration);
                let confidencebuilder = new confidencebuilder_1.ConfidenceBuilder(luisclient);
                let createconfusionmatrix = new confusionmatrixbuilder_1.CreateConfusionMatrix(confidencebuilder);
                let utteranceslist = yield configurationreader.getUtterances(`${pathinput}/${app.name}.json`);
                let result = yield createconfusionmatrix.build(utteranceslist, `${pathoutput}/${app.name}.csv`);
            }
            ;
        });
    }
}
exports.App = App;
let createConfusionMatrix = new App;
createConfusionMatrix.createConfusionMatrix();
//# sourceMappingURL=index.js.map