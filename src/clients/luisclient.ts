import { ILuisresult } from "../models/luisresult";
import { ILuisConfiguration } from "../config/luisconfiguration";


import request from 'request-promise-native'
const https = require('https')

export interface ILuisclient{

   getIntent (utterance: string):Promise<ILuisresult>

}

export class LuisClient implements ILuisclient{
    
    private agente: any ;

    constructor (private config:ILuisConfiguration){
      
            this.agente = request.defaults({
            baseUrl: this.config.baseUrl,
            strictSSL: false,
            agent: new https.Agent({ keepAlive: true })
          
          })
        
    }

    public async getIntent (utterance: string): Promise<ILuisresult>{
        
        let result = await this.agente.get({
            
            uri: `${this.config.modelId}?subscription-key=${this.config.subscription}&q=${utterance}`
            
        })

        return JSON.parse(result);
        
    }

};