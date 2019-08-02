"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transformer {
    transform(luisResult, validation) {
        let output = {
            texto: luisResult.query,
            clase: validation.intent,
            guess: luisResult.topScoringIntent.intent,
            correct: validation.intent === luisResult.topScoringIntent.intent,
            confidence: luisResult.topScoringIntent.score
        };
        return output;
    }
}
exports.Transformer = Transformer;
//# sourceMappingURL=transformer.js.map