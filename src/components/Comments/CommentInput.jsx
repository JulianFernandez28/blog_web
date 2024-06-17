import React, { useState } from 'react';
import { postComment } from './Api/Comments';// Asegúrate de que la ruta sea correcta

const CommentInput = ({ postId, onCommentAdded }) => { // postId se pasa como un prop
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postComment(comment, postId);
      setComment('');
      onCommentAdded();
    } catch (error) {

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">

        <div className="row rounded-pill mt-2 ">
          <textarea
            rows="1"
            placeholder="Introduce tu comentario"
            className="form-control"
            value={comment}
            onChange={handleInputChange}
          />
        </div>
        <div className='row mt-2'>
          <button type="submit" className="btn btn-primary">Publicar</button>
        </div>

      </div>
    </form>
  );
}

export default CommentInput;
