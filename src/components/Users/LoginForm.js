import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./Api/usuario";

const LoginForm = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const response = await loginUser(form.email, form.password);
          if (response.status === 200) {
            localStorage.setItem('userId', response.data.resultado.usuario.id);
            localStorage.setItem('correo', response.data.resultado.usuario.userName);
            localStorage.setItem('userName', response.data.resultado.usuario.nombres);
            localStorage.setItem('token', response.data.resultado.token);
        
            navigate('/postPage');
            
          }
        } catch (error) {
          // Si la respuesta es un error con estado mayor o igual a 400, muestra el mensaje de error
          if (error.response && error.response.status >= 400) {
            window.alert(error.response.data.errorMessages[0]);
          } else {
            // Si es otro tipo de error, maneja el error aquí
            console.error(error);
            window.alert('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
          }
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
