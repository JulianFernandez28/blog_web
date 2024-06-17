import axios from 'axios';



const API_URL = 'https://localhost:7123/api/';


export function getCommentsByPostId(postId) {
  const token = localStorage.getItem('token');
    return axios.get(`${API_URL}Comment/CommentPaginado?PageNumber=1&PageSize=20&PostId=${postId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const postComment = async (comment, postId) => {
  const token = localStorage.getItem('token');
  const usuarioId = localStorage.getItem('userId');
    const data = {
      content: comment,
      usuarioId,
      postId
    };
    console.log(JSON.stringify(data));
    try {
      const response = await axios.post(`${API_URL}Comment`,JSON.stringify(data),{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  export async function updateComment(id, commentUpdateDto){
    const token  = localStorage.getItem('token');
  
    return await axios.put(`${API_URL}Comment/${id}`, JSON.stringify(commentUpdateDto), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }

  export async function deleteComment(id){
    const token = localStorage.getItem('token');
  
    return await axios.delete(`${API_URL}Comment/${id}`,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
  