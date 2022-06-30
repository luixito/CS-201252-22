import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import Delete from "./deleteHijo.jsx";

function GetInfo(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/user/gethijo?padreId=${props.id}`,
        {},
        {
          params: {
            padreId: props.id,
          },
        }
      )
      .then((res) => {
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
          <Delete padreId={props.padreId}></Delete>
        </td>
      </tr>
    );
  });

  return (
    <React.Fragment>
        <label for="chk" aria-hidden="true">
              Tabla de Hijos
            </label>

      <table className="tabla">
        <tr>
          <th>Nombre</th>
          <th>A.Paterno</th>
          <th>A.Materno</th>
          <th>edad</th>
          <th>eliminar</th>
        </tr>
        {getInfo}
      </table>
    </React.Fragment>
  );
}

export default GetInfo;