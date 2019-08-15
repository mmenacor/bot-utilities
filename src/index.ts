import { App } from './app'
import { ConfigurationtReader } from './util/configreader';
import { IAppConfiguration } from './config/IAppConfiguration';

   
var luisConfiguration: ILuisConfiguration = {
  baseUrl: "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/",
  subscription: "4b23194f66da4f69b15507de38b6f3d5",
  alias: 'base'
  };

  // TODO: esto debería ser un singleton
let configurationreader: ConfigurationtReader;
let appConfiguration: IAppConfiguration;
let app: App;
let pathConfiguration: string;


async function init(pathConfiguration: string){
  configurationreader = new ConfigurationtReader();
  appConfiguration = await configurationreader.getConfiguration(pathConfiguration);
  app = new App(appConfiguration);
}

async function createConfusionMatrix() {
  await app.createConfusionMatrix();
}