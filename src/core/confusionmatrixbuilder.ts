import { IUtterance } from "../models/utterance";
import { IConfidence } from "../models/confidence";
import { Transformer } from "../util/transformer";
import { ILuClient } from "../clients/ILuClient";

export class ConfusionMatrixBuilder {
    
    
    private transformer: Transformer;
    
    constructor(private luisclient:ILuClient ){
        this.transformer= new Transformer();
    }

    public async getConfidencesFromUtterances (utterances:IUtterance[]): Promise<IConfidence[]> {   
    
        try{
        let result =  await Promise.all(utterances.map( async (utterance, index, utterances) =>{
             
                 let luisResult = await this.luisclient.getIntent(utterance.text);
                 return this.transformer.transform(luisResult, utterance);
                 
             }));
 
             return result;
             
         }catch(err){
             console.error("Error" + err);
        }
    }

    public async build (utterances:IUtterance[],filename:string): Promise<any> {   
        
        const createCsvWriter = require('csv-writer').createObjectCsvWriter;
        let confidences = await this.getConfidencesFromUtterances(utterances);
        
        console.log("Comienza la creación del csv");
            
        const csvWriter = createCsvWriter({
            path: filename,
            fieldDelimiter : ';',
            header: [
                { id: 'texto', title: 'texto' },
                { id: 'clase', title: 'clase' },
                { id: 'guess', title: 'guess' },
                { id: 'correct', title: 'correct' },
                { id: 'confidence', title: 'confidence' }
                
            ]
        });
                
        return await csvWriter.writeRecords(confidences)
                .then(()=>console.log("Archivo creado con éxito"))
                .catch((err:any)=>console.log(err));
                
    }
}
