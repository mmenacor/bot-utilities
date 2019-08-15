import { ILuResult } from "../models/luresult";

export interface ILuClient{

  getIntent (utterance: string):Promise<ILuResult>

}