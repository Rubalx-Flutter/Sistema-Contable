import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const TablaGastos = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const getUsuarios = async () => {
          const res = await axios.get("http://localhost:4000/api/usuarios");
          setLista(res.data);
        };
        getUsuarios();
    }, [lista]);

    const eliminarUsuario = async (id) => {
        await axios.delete("http://localhost:4000/api/usuarios/" + id);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Centro de Costos</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Cuenta Contable</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Monto</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">Concepto</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                          John Doe
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{lista.nombre}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{list.apellido}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">{list.edad}</td>
                        <td className="whitespace-nowrap px-4 py-2">
                          <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">{list.correo}</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}