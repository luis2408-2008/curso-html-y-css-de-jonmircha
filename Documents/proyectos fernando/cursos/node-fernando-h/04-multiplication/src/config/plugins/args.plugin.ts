import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: 'multiplication table base',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    description: 'multiplication table limit',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    description: 'show multiplication table',
  })
  .option('n', {
      alias: 'name',
      type: 'string',
      default: 'multiplication-table',
      describe : 'File Name',
  })
  .option('d', {
      alias: 'destination',
      type: 'string',
      default: 'outputs',
      describe: 'File Destination',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error('Error: base must be a number');
    }

    if (argv.b < 1) {
      throw new Error('Error: base must be greater than 0');
    }

    return true;
  })
  .parseSync();
