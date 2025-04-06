
const pares = (numeros) => {

    for(let i = 0;i < numeros.length; i ++) {

        let numero = numeros[i];

        if ((numero % 2) === 0) {

            console.log(`${numero} es par`)

        } else {

            console.log(`${numero} es impar`)
        }

    }


}

module.exports = {
    pares
}

console.log('hola mundo')