import { options } from 'yargs';
interface runOptions {
    base: number;
    limit: number;
    show: boolean;
}


export class ServerApp {

  static run(options:runOptions) {
        console.log('Server is running...');
        console.log({options})
        
    }
}