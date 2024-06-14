import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {year} Derechos Reservados:
        <a className="text-dark" href="https://tu-sitio-web.com/">Pizzita Blog</a>
      </div>
    </footer>
  );
};

export default Footer;
