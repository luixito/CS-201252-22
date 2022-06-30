import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import Modal from "./modal.jsx";
import Delete from "./deletePadre.jsx";
import Hijos from "./getInfoHijos.jsx";
import Ahijos from "./agregarHijo.jsx";
import { useModal } from "./useModal.js";

function GetInfo(props) {
  const [abrir, abrirModal, cerrarModal] = useModal(false);
  const [abrir2, abrirModal2, cerrarModal2] = useModal(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/user/getpadre?userId=${props.id}`,
        {},
        {
          
          params: {
            usuarioId: props.id,
          },
        }
      )
      .then((res) => {
        console.log("iduser", props.id);
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(info);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getInfo = info.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.nombre}</td>
        <td>{info.paterno}</td>
        <td>{info.materno}</td>
        <td>{info.edad}</td>
        <td>
          <Delete userId={info.usuarioId}></Delete>
        </td>
        <td>
          <button onClick={abrirModal}>Mostrar</button>
          <Modal abierto={abrir} cerrarModal={cerrarModal}>
            {/* <Hijos padreId={info.id}></Hijos> */}
          </Modal>
        </td>
        <td>
          <button onClick={abrirModal2}>Agregar</button>
          <Modal abierto={abrir2} cerrarModal={cerrarModal2}>
            {/* <Ahijos padreId={info.id}></Ahijos> */}
          </Modal>
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <label for="chk" aria-hidden="true">
        Tabla de Padres
      </label>
      <table className="tabla">
        <tr>
          <th>Nombre</th>
          <th>A.Paterno</th>
          <th>A.Materno</th>
          <th>edad</th>
          <th>eliminar</th>
          <th>M.Hijos</th>
          <th>A.Hijo</th>
        </tr>
        {getInfo}
      </table>
    </React.Fragment>
  );
}

export default GetInfo;
