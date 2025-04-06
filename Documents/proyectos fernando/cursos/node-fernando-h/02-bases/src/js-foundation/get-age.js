

const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age')


const buildPerson = ({ name, birthdate}) => {

   return {
    id: uuidv4(),
    age: getAge(birthdate),
    name: name,
    birthday: birthdate,
    

   }

}

const obj = {name:'luis', birthdate: '04/02/2008' }

const luis = buildPerson(obj)

console.log(luis)





