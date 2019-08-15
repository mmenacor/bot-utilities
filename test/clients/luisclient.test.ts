
import {LuisClient} from '../../src/clients/luisclient';
import { ILuisConfiguration } from "../../src/config/ILuisConfiguration";
import { ILuResult } from '../../src/models/luresult';
//import * as datatests from './datatest';

var datatests = require('../datatest.js');

test("El consumo del servicio arroja data", async ()=>{
    
    //arrange
    let luisConfiguration: ILuisConfiguration = {
        baseUrl: "https://www.mocky.io/v2/5d30dbe13200000cb1204780",
        subscription: "4b23194f66da4f69b15507de38b6f3d5"
    };

    let modelId = "9a1c34c7-7063-430a-84f8-6cb93805e33d";
    let luisclient = new LuisClient(luisConfiguration, modelId);
        
    //Act
    let result = await luisclient.getIntent("Saldo por pagar")
    //assert
    expect(result.topScoringIntent.intent).toEqual("CONSULTA_SALDO");
    

})