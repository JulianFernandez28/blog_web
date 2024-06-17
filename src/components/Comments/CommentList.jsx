import React, { useState, useEffect, useCallback } from 'react';
import { getCommentsByPostId } from './Api/Comments';
import { formatDate } from '../../utilities/formatDate';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import EditCommentModal from './EditCommentModal';
import DeleteCommentModal from './DeleteCommentModal';


const CommentList = ({ postId, commentAdded }) => {
  const [comments, setComments] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [currentComment, setCurrentComment] = useState(null);

  var userId = localStorage.getItem('userId');
  const fetchComments = useCallback(async () => {
    try {
      const response = await getCommentsByPostId(postId);
      setComments(response.data.resultado);
    } catch (error) {
      console.error('Error al obtener los comentarios:', error);
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments, commentAdded]);

  const handleEdit = (comment) => {
    setCurrentComment(comment);
    setShowEdit(true);
  };
  
  const handleCloseEdit = () => {
    setShowEdit(false);
    setCurrentComment(null); // Restablece el comentario actual
  };

  const handleDelete = (comment) => {
    setCurrentComment(comment);
    setShowDelete(true);
  };

  if (!comments.length) {
    return <div>No hay comentarios para mostrar.</div>;
  }

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="card bg-light mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-end">
              <p className="card-text"><small className="text-muted">Publicado el {formatDate(comment.createOn)}</small></p>
            </div>
            <h5 className="card-title">{comment.usuario.nombres}</h5>
            <p className="card-text">{comment.content}</p>
            {comment.usuario.id === userId && (
              <div className="d-flex justify-content-end">
                <button onClick={() => handleEdit(comment)} className="btn btn-warning btn-sm m-2"><FaEdit /></button>
                <button onClick={() => handleDelete(comment)} className="btn btn-danger btn-sm m-2"><FaTrashAlt /></button>
              </div>
            )}
          </div>
          <EditCommentModal show={showEdit} handleClose={handleCloseEdit} comment={currentComment} fetchComments={fetchComments} />
          <DeleteCommentModal show={showDelete} Comment={comment} handleClose={() => setShowDelete(false)} comment={currentComment} fetchComments={fetchComments} />
       
        </div>
      ))}

    </div>
  );
};

export default CommentList;
