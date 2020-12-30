const axios = require('axios');

const api = axios.create({
  baseURL: 'https://videosapi.metabrasil.com.br:3000',
  auth: {
    username: 'toyota',
    password: 'toyota@2020'
  },
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
