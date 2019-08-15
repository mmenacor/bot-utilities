import { IEntity } from "./entity";
import { IIntent } from "./intent";

export interface ILuResult {
    query:string;
    topScoringIntent: IIntent;
    entities?: IEntity[]
    
}