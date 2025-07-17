import React, { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <nav className="header__container">
        <div className="header__logo">
          <h1>
            ASO<span className="header__site">ESFOT</span>
          </h1>
        </div>

        <div className={`header__barra ${menuAbierto ? 'active' : ''}`}>
          <div className="navegacion">
            <Link to="/" className="navegacion__link" onClick={cerrarMenu}>Inicio</Link>
            <Link to="/about" className="navegacion__link" onClick={cerrarMenu}>Nosotros</Link>
            <Link to="/service" className="navegacion__link" onClick={cerrarMenu}>Servicios</Link>
            <Link to="/contact" className="navegacion__link" onClick={cerrarMenu}>Contactos</Link>
          </div>
          <div className="buttons">
            <Link to="/login" className="button" onClick={cerrarMenu}>Login</Link>
            <Link to="/register" className="button" onClick={cerrarMenu}>Registro</Link>
          </div>
        </div>

        <div className="header__hamburger" onClick={toggleMenu}>
          <i className={`fas ${menuAbierto ? 'fa-times' : 'fa-bars'} hamburger`}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
