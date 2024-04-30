import React, { useState } from "react";
import axios from "axios";

const CrearUsuarios = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: "",
    telefono: 0,
    correo: "",
  };

  const [usuario, setUsuario] = useState(valorInicial);

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const guardarDatos = async (e) => {
    e.preventDefault();
    console.log(usuario);

    //crear la logica para la peticion post
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
    };

    await axios.post("http://localhost:4000/api/usuarios", newUser);

    setUsuario({ ...valorInicial });
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <h2 className="text-center mb-3">Crear Gasto</h2>
          <div className="mb-3">
            <label>Centro de Costos:</label>

            <input
              typeof="text"
              className="form-control"
              placeholder="Centro de Costos"
              required
              name="nombre"
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Cuenta Contable:</label>

            <input
              typeof="text"
              className="form-control"
              placeholder="Tipo de Gasto"
              required
              name="apellido"
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Monto $$$:</label>

            <input
              typeof="number"
              className="form-control"
              placeholder="¿Cuánto dinero fue el gasto?"
              required
              name="edad"
              value={usuario.edad}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Concepto:</label>

            <input
              typeof="text"
              className="form-control"
              placeholder="Concepto"
              required
              name="correo"
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>
          <button className="btn btn-primary form-control">
            Guardar Gasto
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuarios;