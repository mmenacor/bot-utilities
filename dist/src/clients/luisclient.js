"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_native_1 = __importDefault(require("request-promise-native"));
const https = require('https');
class LuisClient {
    constructor(config) {
        this.config = config;
        this.agente = request_promise_native_1.default.defaults({
            baseUrl: this.config.baseUrl,
            strictSSL: false,
            agent: new https.Agent({ keepAlive: true })
        });
    }
    getIntent(utterance) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.agente.get({
                uri: `${this.config.modelId}?subscription-key=${this.config.subscription}&q=${utterance}`
            });
            return JSON.parse(result);
        });
    }
}
exports.LuisClient = LuisClient;
;
//# sourceMappingURL=luisclient.js.map