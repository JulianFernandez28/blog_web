import { useState } from "react";
import { loginUser } from "./Api/usuario";

const LoginForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const response = await loginUser(form.email, form.password);
          console.log(response)
          // Maneja la respuesta de la API aquí
        } catch (error) {
          // Maneja el error aquí
        }
      };

    return (
        <div className="container flex justify-content align-items-center">
            <form onSubmit={handleSubmit} className="p-3">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" name="email" onChange={handleChange} className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" name="password" onChange={handleChange} className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>

    );
};

export default LoginForm;