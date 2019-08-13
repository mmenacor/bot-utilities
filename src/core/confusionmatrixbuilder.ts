import { IUtterance } from "../models/utterance";
import { IConfidence } from "../models/confidence";
import { ConfidenceBuilder } from "./confidencebuilder";

export class CreateConfusionMatrix {
    
    
    constructor(private confidencebuilder: ConfidenceBuilder){
    
     
}
public async build (utterances:IUtterance[],filename:string): Promise<any> {   
    
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;

    let confidences = await this.confidencebuilder.build(utterances);
    
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
