import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const UserPage = () => {


    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userId = localStorage.getItem('userId');

    const userName = localStorage.getItem('userName');
    

    const onLogout = () =>{
        // Clear the localStorage
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('token');

        // Redirect to the login page
        navigate('/login');
    }

  return (
    <div className="container m-5 p-3">
      <h2>Perfil de usuario</h2>
      <div className="mb-3">
        <label className="form-label">ID de usuario</label>
        <input type="text" className="form-control" value={userId} readOnly />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre de usuario</label>
        <input type="text" className="form-control" value={userName} readOnly />
      </div>
      <div className='d-flex justify-content-center m-4'>
      <Button variant="danger" onClick={handleShow}>
        Cerrar sesión
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que quieres cerrar la sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={onLogout}>
            continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserPage;
