import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateComment } from './Api/Comments';

const EditCommentModal = ({ show, handleClose, comment, fetchComments }) => {
    const [content, setContent] = useState(comment ? comment.content : '');

    useEffect(() => {
        setContent(comment ? comment.content : '');
    }, [comment]);

    const userId = localStorage.getItem('userId');

    const handleConfirm = async (event) => {
        event.preventDefault();
      
        const newComment = {
          "content": content,
          "postId": comment.postId,
          "usuarioId": userId,
        }

        console.log(newComment)
        try {
          var response = await updateComment(comment.id, newComment);
          console.log(response);
          fetchComments(); 
          handleClose();
        } catch (error) {
          if (error.response && error.response.status >= 400) {
            window.alert(error.response.data.errorMessages[0]);
          } else {
            console.error(error);
            window.alert('Ocurrió un error al editar el Comentario. Por favor, inténtalo de nuevo.');
          }
        }
    };

    const handleCancel = () => {
        setContent(comment ? comment.content : ''); // Restablece el contenido del comentario al original
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Comentario</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleConfirm}>
                <Modal.Body>
                    {comment && (
                        <Form.Group>
                            <Form.Label>Contenido:</Form.Label>
                            <Form.Control as="textarea" rows={3} value={content} onChange={e => setContent(e.target.value)} />
                        </Form.Group>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default EditCommentModal;
