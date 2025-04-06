
const axios = require('axios'); 


const { http } = require(".");


const httpClientPlugin = {

  get: async (url) => {
    const {data}= await axios.get(url);
    console.log({data})
    return data;
    // const resp = await fetch(url);
    // return await resp.json();


  },

  post: async (url, body) => {}, 
  put: async (url, body) => {},
  delete: async (url) => {},


};

module.exports = {
  http : httpClientPlugin, 
}