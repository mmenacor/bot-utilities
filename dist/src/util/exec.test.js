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
const luisclient_1 = require("../../src/clients/luisclient");
const confidencebuilder_1 = require("../../src/core/confidencebuilder");
var datatests = require('../datatest.js');
test("El consumo del servicio arroja data", () => __awaiter(this, void 0, void 0, function* () {
    let luisConfiguration = {
        baseUrl: "https://www.mocky.io/v2/5d30dbe13200000cb1204780",
        modelId: "9a1c34c7-7063-430a-84f8-6cb93805e33d",
        subscription: "4b23194f66da4f69b15507de38b6f3d5"
    };
    let luisclient = new luisclient_1.LuisClient(luisConfiguration);
    let confidencebuilder = new confidencebuilder_1.ConfidenceBuilder(luisclient);
    let validation = datatests.utteranceValidation;
    let builder = confidencebuilder.build(validation);
}));
//# sourceMappingURL=exec.test.js.map