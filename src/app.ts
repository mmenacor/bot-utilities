import {LuisClient} from './clients/luisclient';
import { IAppConfiguration } from "./config/IAppConfiguration";
import {ConfusionMatrixBuilder} from './core/confusionmatrixbuilder';
import {ConfigurationtReader} from './util/configreader';

export class App {
    
    private configurationtReader: ConfigurationtReader;

    constructor(private configuration: IAppConfiguration) {
        // esta clase debería ser instanciada con un singleton
        this.configurationtReader = new ConfigurationtReader();
        
    }
    
    public async createConfusionMatrix() {

        for(let luConfig of this.configuration.luConfigurations) {
            let models  = this.configuration.models.filter((model) => {
                return luConfig.alias === model.luAlias
            })

            for(let model of models) {
                let luisclient  =  new LuisClient(luConfig, model.appID);
                let createconfusionmatrix =  new ConfusionMatrixBuilder(luisclient);
                let validationlist=  await this.configurationtReader.getUtterances(model.pathValidationUtterances);
                await createconfusionmatrix.build(validationlist, `${this.configuration.outputPath}/${model.name}.csv`);            
            }
        }
    }

}
        
    
    

