import { ILuisresult } from "../models/luisresult";

export interface ILuisclient{

    getIntent (utterance: string):ILuisresult


    }

export class LuisClient implements ILuisclient{

    public getIntent (utterance: string):ILuisresult{

        let result: ILuisresult;
        return result;
    }

};