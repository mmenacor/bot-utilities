import { IEntity } from "./entity";
import { IIntent } from "./intent";

export interface ILuisresult {
    query:string;
    topScoringIntent: IIntent;
    entities?: IEntity[]
    
}