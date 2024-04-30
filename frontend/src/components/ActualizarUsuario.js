import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ActualizarUsuarios = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: "",
    telefono: 0,
    correo: "",
  };

  let { id } = useParams();

  const [usuario, setUsuario] = useState(valorInicial);
  const [subId, setSubId] = useState(id ?? "");

  const capturarDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  //funcion para actualizar el usuario
  const actualizarUser = async (e) => {
    e.preventDefault();
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
    };

    await axios.put("http://localhost:4000/api/usuarios/" + subId, newUser);
    setUsuario({ ...valorInicial });
    setSubId("");
  };

  //Logica para hacer una peticion a la api
  const obtUno = async (valorId) => {
    const res = await axios.get(
      "http://localhost:4000/api/usuarios/" + valorId
    );
    setUsuario({
      nombre: res.data.nombre,
      apellido: res.data.apellido,
      edad: res.data.edad,
      telefono: res.data.telefono,
      correo: res.data.correo,
    });
  };

  useEffect(() => {
    if (subId !== "") {
      obtUno(subId);
    }
  }, [subId]);

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={actualizarUser}>
          <h2 className="text-center mb-3">Actualizar Gasto</h2>
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
          <button className="btn btn-danger form-control">
            Actualizar Gasto
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActualizarUsuarios;
