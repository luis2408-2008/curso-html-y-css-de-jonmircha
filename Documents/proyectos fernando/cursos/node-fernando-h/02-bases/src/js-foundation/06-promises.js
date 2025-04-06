
const{http} = require('../plugins')

const getPokemonById = async ( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get(url)

    // const resp = await fetch(url);
    // const pokemon = await resp.json();


    // throw new Error('pokemon no encontrado')

    return pokemon.name;

    // return fetch(url)
    // .then(( response) => response.json()) 
    // // .then(()=> {throw new Error('pokememon no encontrado')})
    // .then(( pokemon ) => pokemon.name) 

}

module.exports = getPokemonById;




