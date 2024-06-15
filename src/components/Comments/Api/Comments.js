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

export const postComment = async (comment, usuarioId, postId) => {
  const token = localStorage.getItem('token');
    const data = {
      content: comment,
      usuarioId,
      postId
    };
    try {
      const response = await axios.post(`${API_URL}Comment`,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
      },data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }