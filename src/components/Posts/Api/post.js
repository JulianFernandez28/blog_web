import axios from 'axios';



const API_URL = 'https://localhost:7123/api/';



export function getPosts() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imp1bGlhbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJuYmYiOjE3MTgzNDYyNDgsImV4cCI6MTcxODk1MTA0OCwiaWF0IjoxNzE4MzQ2MjQ4fQ.hF4PRGBV7naE37vAWXTzTfQfxtEhv09spHTWLyPdM4A";
  return axios.get(`${API_URL}Post/PostPaginado?PageNumber=1&PageSize=20`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}
