import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

console.log(yarg);

let outputMessage = '';
const base = Number(yarg.base);

if (isNaN(base)) {
  throw new Error('base must be a number');
}

const headerMessage = `\nTabla del ${base}\n\n`;

const limit = typeof yarg.limit === 'number' ? yarg.limit : 10;
for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (yarg.show) {
  console.log(outputMessage);
}

const outputPath = 'outputs';



const fileName = `${outputPath}/table-${base}.txt`;

fs.writeFileSync(fileName, outputMessage);

console.log('archivo creado')
