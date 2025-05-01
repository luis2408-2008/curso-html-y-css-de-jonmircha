import fs from 'fs';
import { options } from 'yargs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent : string;
    destination?: string;
    fileName?   : string;
}

export class SaveFile implements SaveFileUseCase {

    constructor (
        // repository: StorageRepository
    ) {}

    execute(options: Options): boolean {

        const outputPath = options.destination ?? './outputs';
        const base = options.fileName ?? 'default';
        const outputMessage = options.fileContent;

        const fileName = `${outputPath}/table-${base}.txt`;

        try {
            fs.mkdirSync(outputPath, { recursive: true }); 
            fs.writeFileSync(fileName, outputMessage);
            return true;
        } catch (error) {
            console.error('Error al crear el archivo:', error);
            return false;
        }
    }
}
