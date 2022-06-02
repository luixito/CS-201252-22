import React from "react";
import axios from "axios";
import Profile from './profile.jsx';
import { useState } from "react";
import Swal from 'sweetalert2';

const Login = () => {
  const [log, setLog] = useState(true);
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const handleLog = () =>{
    if (log===true) {
      setLog(false);
    }else if(log===false){
      setLog(true);
    }
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
    const userData = {
      username: state.username,
      email: state.email,
      password: state.password,
      phone_number: state.phone_number,
    };

    axios
      .post("http://localhost:4000/api_v1/user/register",{} ,{params:{
      username: state.username,
      email: state.email,
      password: state.password,
      phone_number: state.phone_number,
    }
    })
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
        position: 'top-end',
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1000
      });
  };

  return (
    <div className="main">
     {log ? <div>  <input type="checkbox" id="chk" aria-hidden="true"></input>

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
            type="email"
            name="email"
            placeholder="Correo"
            value={state.email}
            onChange={handleChange}
          ></input>
          <input
            type="number"
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
          <button>Registrar</button>
        </form>
      </div>

      <div className="login">
        <form action="./profile.jsx">
          <label for="chk" aria-hidden="true">
            Login
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
            name="pswd"
            placeholder="Contraseña"
            value={state.password}
            onChange={handleChange}
          />
          <button onClick={handleLog}>Login</button>
        </form>
      </div>
      </div> : (<div>
      <Profile></Profile>
      <button onClick={handleLog}>Cerrar Sesion</button>
      </div>)}
    </div> 
  );
};

export default Login;
