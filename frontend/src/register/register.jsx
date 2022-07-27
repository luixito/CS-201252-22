import "./register.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
  });

  const userData = {
    username: state.username,
    password: state.password,
    email: state.email,
    authen:false,
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/user/create", {
        username: userData.username,
        correo: userData.email,
        pass: userData.password,
        authen: userData.authen,
      })
      .then((response) => {
        console.log(response.status, "llegamos bien");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro exitoso",
          showConfirmButton: false,
          timer: 1000,
        });
        
        axios
          .post("http://localhost:3000/api/user/auten_acount", {
            email: userData.email,
          })
          .then((response) => {
            console.log("confirmacion enviada");
            console.log("response");
          })
          .catch((error) => {
            if (!error.response) {
              console.log(error);
              console.log("server respondio");
            } else if (error.request) {
              console.log("error");
              console.log(error);
              console.log(userData, "userdata");
            } else {
              console.log(error);
            }
          });
      })
      .catch((error) => {
        if (!error.response) {
          console.log(error.response);
          console.log("server respondio");
        } else if (error.request) {
          console.log("error");
          console.log(error);
          console.log(error.response.request._response);
          console.log(userData);
        } else {
          console.log(error);
        }
      });

      
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label" for="chk" aria-hidden="true">
          Registrar
        </label>
        <input
          className="inp"
          type="text"
          name="username"
          placeholder="Nombre de Usuario"
          value={state.username}
          onChange={handleChange}
        />
        <input
          className="inp"
          type="email"
          name="email"
          placeholder="Correo"
          value={state.email}
          onChange={handleChange}
        ></input>
        <input
          className="inp"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={state.password}
          onChange={handleChange}
        />
        <button className="button">Registrar</button>
      </form>
    </div>
  );
};

export default Login;
