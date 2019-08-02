import {LuisClient, ILuisclient} from '../../src/clients/luisclient'
import { ILuisConfiguration } from "../../src/config/luisconfiguration";
import { ILuisresult } from '../../src/models/luisresult';
import {ConfidenceBuilder} from '../../src/core/confidencebuilder';
import {CreateConfusionMatrix} from '../../src/core/confusionmatrixbuilder';
import { IUtterance } from '../../src/models/utterance';
import { IConfidence } from "../../src/models/confidence";
import { Transformer } from '../../src/util/transformer';




//import * as datatests from './datatest';
   
var datatests = require('../datatest.js');

const fs = require('fs');
const path = 'C:/output/out.csv';
function fileExist(filePath:string) {
 return new Promise((resolve, reject) => {
   fs.access(filePath, fs.F_OK, (err:any) => {
     if (err) {
       console.error(err)
       return reject(err);
    }
     //file exists
     resolve(true);
   })
 });
}

test("Se crea el archivo csv con éxito", async ()=>{        
    //Arrange
    
   

    let luisConfiguration: ILuisConfiguration = {
    baseUrl: "https://www.mocky.io/v2/5d30dbe13200000cb1204780",
    modelId: "9a1c34c7-7063-430a-84f8-6cb93805e33d",
    subscription: "4b23194f66da4f69b15507de38b6f3d5"
    };
    
    let luisclient  = new LuisClient(luisConfiguration);
    let confidencebuilder: ConfidenceBuilder = new ConfidenceBuilder(luisclient); 
    let createconfusionmatrix = new CreateConfusionMatrix(confidencebuilder);
    let validation: IUtterance[] = datatests.utteranceValidation;

    //Act
    let result = await createconfusionmatrix.build(validation, path);
    // .then(()=> console.log("Se creo el archivo con éxito"))
    // .catch((err)=> console.error("Error: ", err));
    //
    
    let existFlag = await fileExist(path)
    //Asert
    expect(existFlag).toEqual(true);
})
        
  

