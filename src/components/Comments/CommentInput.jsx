import React, { useState } from 'react';
import { postComment } from './Api/Comments';// Asegúrate de que la ruta sea correcta

const CommentInput = ({ postId }) => { // postId se pasa como un prop
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const usuarioId = "d6c61be8-65a6-4dd6-b80d-bab3c24a66f1";

    const data = await postComment(comment, usuarioId, postId);
    console.log(data);
    setComment(''); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col">
          <textarea 
            rows="1" 
            placeholder="Introduce tu comentario" 
            className="form-control rounded-pill" 
            value={comment} 
            onChange={handleInputChange} 
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">➤</button>
        </div>
      </div>
    </form>
  );
}

export default CommentInput;
