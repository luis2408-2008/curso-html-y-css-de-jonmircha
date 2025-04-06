

const tablas = (inicio, final) => {

    for(let i = 1;i <= final; i ++) {

        let resultado = i * inicio;
        console.log(`${inicio} x ${i} = ${resultado}`);

    }

    
}
tablas(2, 10);
