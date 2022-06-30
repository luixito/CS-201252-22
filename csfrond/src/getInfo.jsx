import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import Modal from "./modal.jsx";
import { useModal } from "./useModal.js";
import Delete from "./delete.jsx";
import Profile from "./profile.jsx";
import Padres from "./getInfoPadres.jsx"

function GetInfo(props) {
  const [abrir, abrirModal, cerrarModal] = useModal(false);
  const [abrir2, abrirModal2, cerrarModal2] = useModal(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/getusuario")
      .then((res) => {
        console.log('data', res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getInfo = info.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.nombre}</td>
        <td>{info.id}</td>
        <td>
          <button onClick={abrirModal}>agregar</button>
          <Modal abierto={abrir} cerrarModal={cerrarModal}>
            <Profile id={info.id}></Profile>
          </Modal>
        </td>
        <td>
          <button onClick={abrirModal2}>Mostrar</button>
          <Modal abierto={abrir2} cerrarModal={cerrarModal2}>
            <Padres id={info.id}></Padres>
          </Modal>
        </td>
        <td>
          <Delete id={info.id}></Delete>
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <table className="tabla">
        <tr>
          <th>Nombre</th>
          <th>Contraseña</th>
          <th>A.padres</th>
          <th>M.padres</th>
          <th>eliminar</th>
        </tr>
        {getInfo}
      </table>
    </React.Fragment>
  );
}

export default GetInfo;
