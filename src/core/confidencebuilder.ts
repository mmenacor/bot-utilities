import { IUtterance } from "../models/utterance";
import { IConfidence } from "../models/confidence";
import { Transformer } from "../util/transformer";
import { ILuisclient } from "../clients/luisclient";

export class ConfidenceBuilder {
    
    private transformer: Transformer;
    
    constructor(private luisclient:ILuisclient ){
        
    this.transformer= new Transformer();
    
}
public async build (utterances:IUtterance[]): Promise<IConfidence[]> {   
    
       
       let result =  await Promise.all(utterances.map( async (utterance, index, utterances) =>{
            
                let luisResult = await this.luisclient.getIntent(utterance.text);
                console.log("UTTERANCES");
                console.log(utterances);
                return this.transformer.transform(luisResult, utterance);
                
            }))
           
         return result;
            
        }
        
    }
