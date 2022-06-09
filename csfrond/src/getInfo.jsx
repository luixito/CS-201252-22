import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";

function GetInfo(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api_v1/user//all_users_orm/")
      .then((res) => {
        console.log(res.data);
        setInfo(res.data.statusMessage.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getInfo = info.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.username}</td>
        <td>{info.email}</td>
        <td>{info.password}</td>
        <td>{info.phone_number}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      <table className="tabla">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Contraseña</th>
          <th>Telefono</th>
        </tr>
        {getInfo}
      </table>
    </React.Fragment>
  );
}

export default GetInfo;
