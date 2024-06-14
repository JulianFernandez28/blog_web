import React, { useState } from 'react';
import { registerUser } from './Api/usuario';



// Formulario de Registro
const RegisterForm = () => {
    const [form, setForm] = useState({ email: '', nombres: '', password: '', rol: 'user' });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    

    const handleSubmit = async e => {
        e.preventDefault();
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
        </form>

    );
};

export default RegisterForm;