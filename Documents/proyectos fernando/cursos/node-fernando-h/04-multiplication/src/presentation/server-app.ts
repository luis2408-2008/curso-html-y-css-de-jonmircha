import { options } from 'yargs';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case'; 

interface runOptions {
    base: number;
    limit: number;
    show: boolean;
    fileDestination: string;
    fileName: string;
}

export class ServerApp {

    static run({ base, limit, show, fileDestination, fileName  }: runOptions) {
        console.log('Server is running...');

        const table = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile().execute({
            fileContent: table,
            destination: fileDestination,
            fileName: fileName, 
        });

        if (show) {
            console.log('Table created:\n', table);
        }

        if (wasCreated) {
            console.log('Archivo guardado correctamente.');
        } else {
            console.log('No se pudo guardar el archivo.');
        }
    }
}
