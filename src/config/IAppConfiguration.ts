import { ILuisConfiguration } from '../config/Iluisconfiguration'
import { ILuModel } from '../models/lumodel';
    

export interface IAppConfiguration {

    luConfigurations: ILuisConfiguration[],
    models: ILuModel[],
    outputPath: string

}