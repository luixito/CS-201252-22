import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Select from "./getInfo.jsx";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
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
      password: state.password,
    };

    axios
      .post(
        "http://localhost:4000/api_v1/user/register",
        {},
        {
          params: {
            username: state.username,
            password: state.password,
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
      position: "top-end",
      icon: "success",
      title: "Registro exitoso",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="main">
      <div>
        {" "}
        <input type="checkbox" id="chk" aria-hidden="true"></input>
        <div className="signup">
          <form onSubmit={handleSubmit}>
            <label for="chk" aria-hidden="true">
              Registrar
            </label>
            <input
              type="text"
              name="username"
              placeholder="Nombre de Usuario"
              value={state.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={state.password}
              onChange={handleChange}
            />
            <button>Registrar</button>
          </form>
        </div>
        <div>
          <Select></Select>
        </div>
      </div>
    </div>
  );
};

export default Login;
