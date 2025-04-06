
// const { getUUID } = require('../plugins/get-id.plugin');
// const {getAge} = require('../plugins/get-age.plugin')



const buildMakePerson = ({getUUID, getAge}) => {

   return  ({name, birthdate}) => {

      return {
   
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate) 
      }
   
   
   
   }


}



// const obj = {name: 'luis', birthdate: '04/02/2008' }

// const luis = buildPerson(obj)

// console.log(luis)

module.exports = {
 buildMakePerson,
}