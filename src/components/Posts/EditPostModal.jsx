import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updatePost } from './Api/post';

const EditPostModal = ({ show, handleClose, post }) => {
    const [title, setTitle] = useState(post ? post.title : '');
    const [content, setContent] = useState(post ? post.content : '');
    const userId = localStorage.getItem('userId');
    const [showConfirm, setShowConfirm] = useState(false);


    useEffect(() => {
        setTitle(post ? post.title : '');
        setContent(post ? post.content : '');
    }, [post]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirm(true);
    };

    const handleConfirm = async () => {
        const data = {
            title,
            content,
            usuarioId: userId,
            image: post.image
        };

        try {
            await updatePost(post.id, data)
            handleClose();
            setShowConfirm(false);

        } catch (error) {
            if (error.response && error.response.status >= 400) {
                window.alert(error.response.data.errorMessages[0]);
            } else {

                console.error(error);
                window.alert('Ocurrió un error al editar el post. Por favor, inténtalo de nuevo.');
            }
        }


    };



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Post</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        {post && (
                            <>
                                <Form.Group>
                                    <Form.Label>Título:</Form.Label>
                                    <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contenido:</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={content} onChange={e => setContent(e.target.value)} />
                                </Form.Group>
                                <span className='text text-danger'>Por el momento solo se puede modificar el titulo y el contenido</span>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary" type="submit">
                            Guardar Cambios
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar cambios</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que quieres guardar los cambios?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirm(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default EditPostModal;
