// CreatePostModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createPublicacion } from './Api/post';

const CreatePostModal = ({ isOpen, closeModal }) => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setImagePreviewUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleClose = () => {
    setImageFile(null); // Borra el archivo de imagen cargado
    setImagePreviewUrl(null); // Borra la URL de vista previa de la imagen
    closeModal();
  };

  const handleSubmit = async () => {
    const postDto = {
      title,
      content,
      image: imageFile, // Aquí estás pasando el archivo de imagen, no la URL del objeto
      usuarioId: "d6c61be8-65a6-4dd6-b80d-bab3c24a66f1"
    };

    await createPublicacion(postDto);

    console.log(postDto);
    handleClose();
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
            <Form.Control type="text" placeholder="Introduce el título del post" required onChange={e => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPostContent">
            <Form.Label>Contenido</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Introduce el contenido del post" required onChange={e => setContent(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPostImage">
            <Form.Label>Imagen del Post</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
            {imagePreviewUrl && <img src={imagePreviewUrl} alt="Imagen seleccionada" className="img-thumbnail mt-3" />}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePostModal;
