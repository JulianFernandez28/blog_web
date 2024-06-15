// api.js
import axios from 'axios';



const API_URL = 'https://localhost:7123/api/';

export async function loginUser(email, password) {
  return await axios.post(`${API_URL}Usuario/login`, { email, password });
}

export async function registerUser(UsuarioDto) {
    return await axios.post(`${API_URL}Usuario/registrar`,
        JSON.stringify(UsuarioDto), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  

