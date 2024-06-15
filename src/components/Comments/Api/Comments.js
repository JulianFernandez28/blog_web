import axios from 'axios';



const API_URL = 'https://localhost:7123/api/';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFueUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsIm5iZiI6MTcxODQzMDQ4MCwiZXhwIjoxNzE5MDM1MjgwLCJpYXQiOjE3MTg0MzA0ODB9.aTA5cfk5Pn4xfFVcyZ3WN4bFbymA4rCCC8FuY1UXm2M"

export function getCommentsByPostId(postId) {
    return axios.get(`${API_URL}Comment/CommentPaginado?PageNumber=1&PageSize=20&PostId=${postId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const postComment = async (comment, usuarioId, postId) => {
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