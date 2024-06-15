import axios from 'axios';



const API_URL = 'https://localhost:7123/api/';




export function getPosts() {
  const token = localStorage.getItem('token');

  return axios.get(`${API_URL}Post/PostPaginado?PageNumber=1&PageSize=20`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}


export function getPostById(id) {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}Post/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}



export const createPublicacion = async (postDto) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();

  // Agrega los campos al formData
  Object.keys(postDto).forEach(key => {
    formData.append(key, postDto[key]);
  });

  try {
    const response = await axios.post(`${API_URL}Post`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` // Aquí se agrega el token
      }
    });

    // Aquí puedes manejar la respuesta de la API
    console.log(response.data);
  } catch (error) {
    // Aquí puedes manejar los errores
    console.error('Error al enviar el post:', error);
  }
};
