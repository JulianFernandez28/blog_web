// DeleteCommentModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { deleteComment } from './Api/Comments';

const DeleteCommentModal = ({ show, handleClose, comment, fetchComments }) => {
  const handleConfirm = async () => {
    await deleteComment(comment.id);
    console.log(`Comentario ${comment.id} eliminado`);
    fetchComments(); 
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que quieres eliminar este comentario?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteCommentModal;
