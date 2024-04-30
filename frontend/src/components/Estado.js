import React, { useEffect, useState } from "react";
import axios from "axios";

const EstadoResultados = () => {

  /*
  const inputAño = document.getElementById("inputAño");
  const año = inputAño.value;
  const inputVenta = document.getElementById("inputVenta");
  const venta = inputVenta.value;
  const inputCosto = document.getElementById("inputCosto");
  const costo = inputCosto.value;
  const inputGastos = document.getElementById("inputGastos");
  const gastos = inputGastos.value;
  const inputAdministracion = document.getElementById("inputAdministracion");
  const administracion = inputAdministracion.value;

  const estadoResultados = [];

  estadoResultados.push({
    año: año,
    venta: venta,
    costo: costo,
    gastos: gastos,
    administracion: administracion,
  });

  //Utilidad Bruta
  const valor = estadoResultados.map( function (lista) { return lista.venta; } );
  const descuento = estadoResultados.map( function (lista) { return lista.costo; } );
  const utilidadBruta = valor - descuento;

  const textBruta = document.getElementById("utilidadBruta");
  textBruta.innerText = "Utilidad bruta: $" + utilidadBruta;

  // Utilidad Operativa
  const gastoVenta = estadoResultados.map( function (lista) { return lista.gastos; } );
  const gastoAdmin = estadoResultados.map( function (lista) { return lista.administracion; } );
  const utilidadOperativa = utilidadBruta - gastoVenta - gastoAdmin;

  const textOperativa = document.getElementById("UtilidadOperativa");
  textOperativa.innerText = "Utilidad Operativa: $" + utilidadOperativa;

  // Utilidad antes de Impuesto
  const ingresos = estadoResultados.map(function (lista) { return lista.otrosingresos; } );
  const egresos = estadoResultados.map(function (lista) { return lista.otrosegresos; } );
  const utilidadSinImpuesto = utilidadOperativa + (ingresos - egresos);

  const textUtilidadSinImpuesto = document.getElementById( "UtilidadSinImpuesto" );
  textUtilidadSinImpuesto.innerText = "Utilidad antes de Impuestos: $" + utilidadSinImpuesto;

  // Utilidad Neta
  const porcentajeImpuesto = estadoResultados.map(function (lista) { return lista.impuesto; } );
  const impuestoRenta = (porcentajeImpuesto / 100) * utilidadSinImpuesto;

  const textImpuestoRenta = document.getElementById("impuestoRenta");
  textImpuestoRenta.innerText = "El impuesto a la Renta es: $" + impuestoRenta;

  const UtilidadNeta = utilidadSinImpuesto - impuestoRenta;
  const textNeta = document.getElementById("UtilidadNeta");
  textNeta.innerText = "Utilidad neta: $" + UtilidadNeta;

  console.log(estadoResultados);
  */

  const [lista, setLista] = useState([]);
  useEffect(() => {
    const getUsuarios = async () => {
      const res = await axios.get("http://localhost:4000/api/usuarios");
      setLista(res.data);
    };
    getUsuarios();
  }, [lista]);

  return (
    <div className="col-md-4 p-2" >
      <div className="card">
        <div className="card-header">
          <h5>Gastos de Venta: {lista.nombre}</h5>
        </div> 
      </div>
    </div>
  )
}

export default EstadoResultados;