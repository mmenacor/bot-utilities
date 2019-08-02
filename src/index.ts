import {LuisClient, ILuisclient} from './clients/luisclient';
import { ILuisConfiguration } from "./config/luisconfiguration";
import { ILuisresult } from './models/luisresult';

export class App {

    public async createConfusionMatrix() {
  
        //import * as datatests from './datatest';
        
        var datatests = require('../datatest.js');
        
            
                let luisConfiguration: ILuisConfiguration = {
                baseUrl: "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/",
                modelId: "9a1c34c7-7063-430a-84f8-6cb93805e33d",
                subscription: "4b23194f66da4f69b15507de38b6f3d5"
            };
            let luisclient = new LuisClient(luisConfiguration);
                
    
            let result:ILuisresult= await luisclient.getIntent("Saldo por pagar")
         
          
            
        
        }

    }


