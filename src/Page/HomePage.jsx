import React from 'react';
import LoginForm from '../components/Users/LoginForm';

const HomePage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="container">
        <div className="card mx-auto shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: "90%" }}>
          <div className="row no-gutters">
            <div className="col-lg-4 d-none d-lg-block">
              <img src="https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img img-fluid" style={{ objectFit: 'cover', height: '100%' }} alt="Imagen de bienvenida" />
            </div>
            <div className="col-lg-8 col-12">
              <div className="card-body">
                <div className='text-center'>
                  <h5 className='display-5'>Bienvenido</h5>
                  <h5 className="card-title">Iniciar sesión</h5>
                </div>
               
                  <LoginForm />
                
                <p className="card-text"><small className="text-muted">¿No tienes una cuenta? <a href="/register">Regístrate</a></small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
