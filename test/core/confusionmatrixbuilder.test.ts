import { LuisClient} from '../../src/clients/luisclient'
import { LuisClientMock } from '../clients/luisclient.mock';
import { ILuClient } from '../../src/clients/ILuClient';
import { ILuisConfiguration } from "../../src/config/ILuisConfiguration";
import {ConfusionMatrixBuilder} from '../../src/core/confusionmatrixbuilder';
import { IUtterance } from '../../src/models/utterance';

//import * as datatests from './datatest';
   
var datatests = require('../datatest.js');

const fs = require('fs');
const path = 'test/out.csv';
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
    subscription: "4b23194f66da4f69b15507de38b6f3d5"
    };

    let modelId = "9a1c34c7-7063-430a-84f8-6cb93805e33d"
    
    let luisclient  = new LuisClient(luisConfiguration, modelId);
    let createconfusionmatrix = new ConfusionMatrixBuilder(luisclient);
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
        
  
test("Longitud de utterances igual a longitud de confidence", async ()=>{

  //Arrange
  let luisclient : ILuClient = new LuisClientMock;
  let confidencebuilder: ConfusionMatrixBuilder = new ConfusionMatrixBuilder(luisclient); 
  let validation: IUtterance[] = datatests.utteranceValidation;
  //let confidenceresult : IConfidence[] = datatests.confidenceresult;
    
  
  //Act
  
  let builder = await confidencebuilder.getConfidencesFromUtterances(validation);
    
  
  //Assert
  expect(validation.length).toEqual(builder.length);
 
})

  test ("Textos de confidence coinciden con los datos ingresados", async ()=>{
      
          //Arrange
  let luisclient : ILuClient = new LuisClientMock;
  let confidencebuilder: ConfusionMatrixBuilder = new ConfusionMatrixBuilder(luisclient); 
  let validation: IUtterance[] = datatests.utteranceValidation;
  //let confidenceresult : IConfidence[] = datatests.confidenceresult;
    
  
  //Act
  
  let builder = await confidencebuilder.getConfidencesFromUtterances(validation);
 
  //Assert
  expect(validation[0].text).toEqual(builder[0].texto);
  expect(validation[1].text).toEqual(builder[1].texto);
             
  }



)