import {ILuisclient} from '../../src/clients/luisclient' ;
import { ILuisresult } from '../../src/models/luisresult';
import { resolve } from 'path';

var datatests = require('../datatest.js');

export class LuisClientMock implements ILuisclient{

    public getIntent (utterance: string):Promise<ILuisresult>{
        
        let result: ILuisresult;
        let luisresults : ILuisresult[]= datatests.luisresults;
        
        for (let i: number = 0 ; i < luisresults.length ; i ++ ){

            if (utterance === luisresults[i].query){

            result = luisresults[i];

            break;
            }
        
           
        }
        return new Promise<ILuisresult>((resolve)=>{
            
            resolve(result);

        });
        
        
        
    }


}
