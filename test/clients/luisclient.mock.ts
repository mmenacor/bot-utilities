import { ILuClient } from '../../src/clients/ILuClient' ;
import { ILuResult } from '../../src/models/luresult';
import { resolve } from 'path';

var datatests = require('../datatest.js');

export class LuisClientMock implements ILuClient{

    public getIntent (utterance: string):Promise<ILuResult>{
        
        let result: ILuResult;
        let luisresults : ILuResult[]= datatests.luisresults;
        
        for (let i: number = 0 ; i < luisresults.length ; i ++ ){

            if (utterance === luisresults[i].query){

            result = luisresults[i];

            break;
            }
        
           
        }
        return new Promise<ILuResult>((resolve)=>{
            
            resolve(result);

        });
        
        
        
    }


}
