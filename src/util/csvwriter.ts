
import { IConfidence } from '../models/confidence';

export class CrearCsv {


    async createCsv(data:IConfidence[])  {
        
        console.log("Comienza la creación del csv");
        const createCsvWriter = require('csv-writer').createObjectCsvWriter;
        const csvWriter = createCsvWriter({
            path: 'out.csv',
            fieldDelimiter : ';',
            header: [
                { id: 'texto', title: 'texto' },
                { id: 'clase', title: 'clase' },
                { id: 'guess', title: 'guess' },
                { id: 'correct', title: 'correct' },
                { id: 'confidence', title: 'confidence' }
                
            ]
        });
        
        // let imprimir: IConfidence = {
            // 
            // texto: "hola",
            // clase: "MCL01",
            // guess: "MCL01",
            // correct: true, 
            // confidence: 0.65

        // }
       await csvWriter.writeRecords(data)
            .then(()  => console.log('The CSV file was written successfully'))
            .catch(() => console.error('ERROR' ) );
    }

}


