import {ConfidenceBuilder} from '../../src/core/confidencebuilder';
import { IUtterance } from '../../src/models/utterance';
import { IConfidence } from "../../src/models/confidence";
import { Transformer } from '../../src/util/transformer';
import { ILuisresult } from '../../src/models/luisresult'
import { LuisClient, ILuisclient } from '../../src/clients/luisclient';
import { LuisClientMock } from '../clients/luisclient.mock';


var datatests = require('../datatest.js');

test("Longitud de utterances igual a longitud de confidence", ()=>{

    //Arrange
    let luisclient : ILuisclient = new LuisClientMock;
    let confidencebuilder: ConfidenceBuilder = new ConfidenceBuilder(luisclient); 
    let validation: IUtterance[] = datatests.utteranceValidation;
    //let confidenceresult : IConfidence[] = datatests.confidenceresult;
      
    
    //Act
    
    let builder = confidencebuilder.build(validation);
    
    
    //Assert
    expect(validation.length).toEqual(builder.length);
})

test ("Tipo de respuesta coincide con los datos ingresados", ()=>{
        

     //Arrange
     let luisclient : ILuisclient = new LuisClientMock;
     let confidencebuilder: ConfidenceBuilder = new ConfidenceBuilder(luisclient); 
     let validation: IUtterance[] = datatests.utteranceValidation;
     
     //let confidenceresult : IConfidence[] = datatests.confidenceresult;
     
     //Act
     let builder = confidencebuilder.build(validation);
     
     
     //Assert
     expect(builder[0].texto).toEqual(validation[0].text) ;
    
    
}



)