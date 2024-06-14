import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreatePostModal = ({ isOpen, closeModal }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleClose = () => {
    setImage(null); // Borra la imagen cargada
    closeModal();
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formPostTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Introduce el título del post" required />
          </Form.Group>
          <Form.Group controlId="formPostContent">
            <Form.Label>Contenido</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Introduce el contenido del post" required />
          </Form.Group>
          <Form.Group controlId="formPostImage">
            <Form.Label>Imagen del Post</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
            {image && <img src={image} alt="Imagen seleccionada" className="img-thumbnail mt-3" />}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        <Button variant="primary">Guardar cambios</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePostModal;
