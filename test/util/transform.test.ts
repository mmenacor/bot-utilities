
import { Transformer } from '../../src/util/transformer';
import { ILuisresult } from '../../src/models/luisresult'
import { IUtterance } from '../../src/models/utterance';

//import * as datatests from './datatest';

var datatests = require('../datatest.js');

test("Número de inputs es igual a Luis results", ()=>{
    
    //arrange
    let transformer : Transformer = new Transformer();
    let luisResult : ILuisresult[] = datatests.luisresults;
    let validation: IUtterance[] = datatests.utteranceValidation;
    
    //Act
    let confidence = transformer.transform(luisResult[0], validation[0]);

    
    //assert
    expect(confidence.clase).toEqual(validation[0].intent);
    expect(confidence.guess).toEqual(luisResult[0].topScoringIntent.intent);

})