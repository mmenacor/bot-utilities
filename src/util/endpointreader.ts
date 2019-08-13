import {IEndpoints} from '../models/endpoints';
import {IUtterance} from '../models/utterance';

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
    

    public async getModels(path:string):Promise<IEndpoints[]>{
        
        let arrApps: IEndpoints[];
        try {
            
            let content = await fs.readFile(path)
            let jsonFile= JSON.parse(content);
            arrApps=jsonFile.endpoints.map((endpoint:any)=>{
                let objApps:IEndpoints = {
                    name: endpoint.name,
                    appID: endpoint.appID
            
               };
                return objApps;
            })
        }catch(err){console.error("Error" + err);}
    return arrApps;
    }  
}
   
// let leerendpoints =new ConfigurationtReader();
// let arregloapps = leerendpoints.getModels("C:/apps/appslist.json");

// let arregloutterances= arregloapps.map((appID)=>{
                
// });

