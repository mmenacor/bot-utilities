import {ILuisclient} from '../../src/clients/luisclient' ;
import { ILuisresult } from '../../src/models/luisresult';

var datatests = require('../datatest.js');

export class LuisClientMock implements ILuisclient{

    public getIntent (utterance: string):ILuisresult{

        let result: ILuisresult = datatests.luisresults[0];
        return result;
    }

};

