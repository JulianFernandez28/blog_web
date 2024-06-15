import React, { useState } from 'react';
import { registerUser } from './Api/usuario';
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', nombres: '', password: '', rol: 'user' });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        handleShow();
    };

    const handleConfirm = async () => {
        const UserCreateDto = {
            "email": form.email,
            "nombres":form.nombres,
            "password": form.password,
            "rol": "user"
        }
        console.log(UserCreateDto)

        try {
            var response = await registerUser(UserCreateDto);
            console.log(response)
            navigate('/login');
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" name="email" onChange={handleChange} className="form-control" id="email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="nombres" className="form-label">Nombres</label>
                <input type="text" name="nombres" onChange={handleChange} className="form-control" id="nombres" required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" name="password" onChange={handleChange} className="form-control" id="password" required />
            </div>

            <button type="submit" className="btn btn-primary">Registrar</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Correo electrónico: {form.email}</p>
                    <p>Nombres: {form.nombres}</p>
                    <p>Contraseña: {form.password}</p>
                    <p>¿Los datos son correctos y deseas continuar?</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    No
                  </Button>
                  <Button variant="primary" onClick={handleConfirm}>
                    Sí
                  </Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};

export default RegisterForm;
