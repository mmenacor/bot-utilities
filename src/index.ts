import {LuisClient, ILuisclient} from './clients/luisclient';
import { ILuisConfiguration } from "./config/luisconfiguration";
import { ILuisresult } from './models/luisresult';
import {ConfidenceBuilder} from '../src/core/confidencebuilder';
import {CreateConfusionMatrix} from '../src/core/confusionmatrixbuilder';
import { IUtterance } from '../src/models/utterance';
import {ConfigurationtReader} from '../src/util/endpointreader';

import {IEndpoints} from '../src/models/endpoints';
export class App {

    public async createConfusionMatrix() {
  
    var datatests = require('./datatest.js');
        
    
    let luisConfiguration: ILuisConfiguration = {
        baseUrl: "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/",
        modelId: "9a1c34c7-7063-430a-84f8-6cb93805e33d",
        subscription: "5fd1d3081968422aa0abea9511a5d774"
    };
    
    const pathoutput = 'C:/output';   
    const pathinput= 'C:/apps';
    let luisclient  = new LuisClient(luisConfiguration);
    let confidencebuilder: ConfidenceBuilder = new ConfidenceBuilder(luisclient); 
    let createconfusionmatrix = new CreateConfusionMatrix(confidencebuilder);
    let configurationreader = new ConfigurationtReader();
    
    let appslist:IEndpoints[] = await configurationreader.getModels(`${pathinput}/appslist.json`)
    
    for(let app of appslist){
        app.name;
        let utteranceslist=  await configurationreader.getUtterances(`${pathinput}/${app.name}.json`);
        let result = await createconfusionmatrix.build(utteranceslist, `${pathoutput}/${app.name}.csv`);            
    };

    
            
    
    // let validation: IUtterance[] = await utteranceslist;
    // let validation = datatests.utteranceValidation;
    
     
            
        
        }
    
        
    }
    let createConfusionMatrix = new App;
    createConfusionMatrix.createConfusionMatrix();
    

