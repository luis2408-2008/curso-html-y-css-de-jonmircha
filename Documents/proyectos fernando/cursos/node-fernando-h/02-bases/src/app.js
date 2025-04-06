
// const {getAge, getUUID} = require('./plugins')
// const {emailTemplate} = require('./js-foundation/01-template')
// const  { getUserById } = require('./js-foundation/05-factory');;
// console.log(emailTemplate)
// const {buildMakePerson} = require('./js-foundation/05-factory')

// const getPokemonById = require('./js-foundation/06-promises');
const {buildLogger} = require('./plugins')

const logger = buildLogger('app.js')

logger.log('hola mundo')
logger.error('esto es algo malo')

 




// getPokemonById(4)
//     .then((pokemon) => {
//         console.log({pokemon})
//     })
//     .catch((error) => {
//         console.error('por favor intente de nuevo')
//     })
//     .finally(() => {
//         console.log('finalizo la peticion')
//     })




   





    
  // token de acceso
  // publicas








// ! referencia a la funcion factory y uso


//  const makePerson = buildMakePerson({getUUID, getAge})
// const obj = {name: 'luis', birthdate: '04/02/2008' }
// const luis = makePerson(obj);
// console.log(luis)



