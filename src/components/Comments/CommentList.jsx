import React, { useState, useEffect } from 'react';
import { getCommentsByPostId } from './Api/Comments';
import { formatDate } from '../../utilities/formatDate';

const CommentList = ({ postId,commentAdded }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getCommentsByPostId(postId);
                setComments(response.data.resultado);
            } catch (error) {
                console.error('Error al obtener los comentarios:', error);
            }
        };

        fetchComments();
    }, [postId,commentAdded]);

    

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

                    </div>
                </div>
            ))}
        </div>
    );



};

export default CommentList;
