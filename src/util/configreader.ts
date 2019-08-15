import {ILuModel} from '../models/lumodel';
import {IUtterance} from '../models/utterance';
import { IAppConfiguration } from '../config/IAppConfiguration';

const fs = require("fs").promises;

export class ConfigurationtReader {
/* Función para leer los archivos de Utterances a probar */
    public async getUtterances(path:string):Promise<IUtterance[]>{
        let arrUtterances: IUtterance[];
        try {
            
            let content = await fs.readFile(path)
            let jsonFile= JSON.parse(content);
            arrUtterances=  await Promise.all(jsonFile.utterances.map((utterance:any)=>{
                let objUtterances:IUtterance = {
                    text: utterance.text,
                    intent: utterance.intent
            
               };
              
                return objUtterances;
            }))
        }catch(err){console.error("Error" + err);}
    return arrUtterances;
        
    }
    

    public async getConfiguration(path:string):Promise<IAppConfiguration>{
        
        let config: IAppConfiguration;
        try {
            
            let content = await fs.readFile(path)
            config = JSON.parse(content);
           
        }catch(err){
            console.error("Error" + err);
        }
    return config;
    }  
}


