// api.js
import axios from 'axios';



const API_URL = 'https://localhost:7123/api/';

export function loginUser(email, password) {
  return axios.post(`${API_URL}Usuario/login`, { email, password });
}

export function registerUser(UsuarioDto) {
    return axios.post(`${API_URL}Usuario/registrar`,
        JSON.stringify(UsuarioDto), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  

