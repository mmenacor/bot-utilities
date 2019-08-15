import { ILuResult } from "../models/luResult";
import { IConfidence } from "../models/confidence" ;
import { IUtterance } from "../models/utterance";

export class Transformer {
    
    public transform (luisResult:ILuResult, validation:IUtterance ) : IConfidence {
                        
        let output: IConfidence = { 
            texto: luisResult.query,
            clase: validation.intent,
            guess: luisResult.topScoringIntent.intent,
            correct: validation.intent === luisResult.topScoringIntent.intent,
            confidence: luisResult.topScoringIntent.score
        };
           
        return output; 

    } 
}