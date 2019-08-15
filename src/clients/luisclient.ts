import { ILuResult } from "../models/luresult";
import { ILuisConfiguration } from "../config/ILuisConfiguration";


import request from 'request-promise-native'
import { ILuClient } from "./ILuClient";
const https = require('https')



export class LuisClient implements ILuClient{
    
    private agente: any ;

    constructor (private config:ILuisConfiguration, private modelId: string){
      
            this.agente = request.defaults({
            baseUrl: this.config.baseUrl,
            strictSSL: false,
            agent: new https.Agent({ keepAlive: true })
          })
        
    }

    public async getIntent (utterance: string): Promise<ILuResult>{
        
        let result = await this.agente.get({
            
            uri: `${this.modelId}?subscription-key=${this.config.subscription}&q=${utterance}`
            
        })

        return JSON.parse(result);
        
    }

};