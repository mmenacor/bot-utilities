import { IUtterance } from "../models/utterance";
import { IConfidence } from "../models/confidence";
import { Transformer } from "../util/transformer";
import { ILuisclient } from "../clients/luisclient";

export class ConfidenceBuilder {

    private transformer: Transformer;

    constructor(private luisclient:ILuisclient ){

    this.transformer= new Transformer();

    }
    public build (utterances:IUtterance[]): IConfidence[] {   
        
        let result : IConfidence[];
        
        result = utterances.map((utterance, index, utterances) =>{
            
            let luisResult = this.luisclient.getIntent(utterance.text);
            
            return this.transformer.transform(luisResult, utterance);
            
                        
        })

        return result;

    }

}