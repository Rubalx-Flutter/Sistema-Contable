import React from "react";
import { Link } from "react-router-dom";
import logo from '../ceaa_logo_blanco.png';

const Navegate = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="172" height="56" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link className="nav-link" to="/EstadoResultados">
                  Estado de Resultados
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Lista de Gastos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/CrearUsuarios">
                  Crear Gastos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navegate;
