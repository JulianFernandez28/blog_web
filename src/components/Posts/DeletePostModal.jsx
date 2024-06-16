// DeletePostModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { deletePost } from './Api/post';

const DeletePostModal = ({ show, handleClose, post, fetchPosts }) => {
  const handleDeleteConfirm = async () => {


    try {
      var response = await deletePost(post.id);
      console.log(response);
      fetchPosts(); // Recarga los posts
      handleClose();
    } catch (error) {
      if (error.response && error.response.status >= 400) {
        window.alert(error.response.data.errorMessages[0]);
    } else {

        console.error(error);
        window.alert('Ocurrió un error al eliminar el post. Por favor, inténtalo de nuevo.');
    }
    }

  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¿Estás seguro de que quieres eliminar este post?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDeleteConfirm}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePostModal;
