import "../register/register.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Register from "../register/register.jsx";
import {Link} from "react-router-dom"

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
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
      password: state.password,
      email: state.email,
    };

    axios
      .post("http://localhost:3000/api/user/login", {
        correo: userData.email,
        pass: userData.password,
      })
      .then((response) => {
        response = userData;
        console.log(response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login exitoso",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        if (!error.response) {
          console.log(error.response);
          console.log("server respondio");
        } else if (error.request) {
          console.log("error");
          console.log(error);
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className="log">
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true"></input>
      <div className="signup">
        <Register></Register>
      </div>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <label className="label" for="chk" aria-hidden="true">
            Login
          </label>
          <input
          className="inp"
            type="text"
            name="email"
            placeholder="Correo"
            value={state.email}
            onChange={handleChange}
          />
          <input
          className="inp"
          type="password"
            name="password"
            placeholder="Contraseña"
            value={state.password}
            onChange={handleChange}
          />
          <Link to="/home" className="button">Login</Link>
        </form>
        <Link to="/recovery"className="button" >Recuperar Contraseña</Link>
        
      </div>
    </div></div>
  );
};

export default Login;
