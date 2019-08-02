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
class App {
    createConfusionMatrix() {
        return __awaiter(this, void 0, void 0, function* () {
            var datatests = require('../datatest.js');
            let luisConfiguration = {
                baseUrl: "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/",
                modelId: "9a1c34c7-7063-430a-84f8-6cb93805e33d",
                subscription: "4b23194f66da4f69b15507de38b6f3d5"
            };
            let luisclient = new luisclient_1.LuisClient(luisConfiguration);
            let result = yield luisclient.getIntent("Saldo por pagar");
        });
    }
}
exports.App = App;
//# sourceMappingURL=index.js.map