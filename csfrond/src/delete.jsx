import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';


const Delete = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: state.username,
      email: state.email,
      password: state.password,
      phone_number: state.phone_number,
    };

    axios
      .put(
        "http://localhost:4000/api_v1/user/delete",
        {},
        {
          params: {
            username: state.username,
            email: state.email,
            password: state.password,
            phone_number: state.phone_number,
          },
        }
      )
      .then((response) => {
        console.log(response.status);
        console.log(userData);
        console.log(response);
      })
      .catch((error) => {
        if (!error.response) {
          console.log(error.response);
          console.log("server respondio");
        } else if (error.request) {
          console.log("error");
        } else {
          console.log(error);
        }
      });
      Swal.fire({
        icon: 'error',
        title: 'Eliminado',
        text: 'Usuario eliminado con exito!',
        text1: 'Relogee para ver cambios',
      });
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h4>Eliminar Cuenta</h4>
        <h4>Obligatorio ingresar usuario</h4>
        <input
          type="text"
          name="username"
          placeholder="Nombre de Usuario"
          value={state.username}
          onChange={handleChange}
        />
        <button className="cerrar">Eliminar</button>
      </form>
    </div>
  );
};

export default Delete;
