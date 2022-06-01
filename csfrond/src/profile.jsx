import React from "react";
import axios from "axios";
import { useState } from "react";
import Delete from "./delete.jsx";

const Profile = (props) => {
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
        "http://localhost:4000/api_v1/user/update_user",{},
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
  };

  return (
    <div>
    <div className="profile">
      <form onSubmit={handleSubmit}>
        <p><label for="chk" aria-hidden="true">
          Actualizar Informacion
        </label></p>
        <h4>Obligatorio ingresar usuario</h4>
        <input
          type="text"
          name="username"
          placeholder="Nombre de Usuario"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Correo"
          value={state.email}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="phone_number"
          placeholder="Telefono"
          value={state.phone_number}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={state.password}
          onChange={handleChange}
        />
        <button>Actualizar</button>
      </form>
    </div>
    <Delete></Delete>
    </div>
  );
};

export default Profile;
