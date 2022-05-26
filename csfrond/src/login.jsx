import React from "react";
import { useState } from "react";
import Fetch from './axios.js';

function Login() {
  const [username, setNewUser] = useState("Articulo");
  const [pasword, setNewPassword] = useState("Articulo");
  const [phonenumber, setNewPhone] = useState("Articulo");
  const [email, setNewEmail] = useState("Articulo");

  const events = (e) => {
    setNewUser(e.target.value);
    setNewPassword(e.target.value);
    setNewPhone(e.target.value);
    setNewEmail(e.target.value);
  };

  return (
    <div>
      <h4>Actualizar datos de cuenta</h4>
      <h2>ingrese nuevo usuario</h2>
      <input type="text" onChange={events} />
      <h2>ingrese nueva contraseña</h2>
      <input type="text" onChange={events} />
      <h2>ingrese actualizar telefono</h2>
      <input type="text" onChange={events} />
      <h2>ingrese nueva email</h2>
      <input type="text" onChange={events} />

      <Fetch username={username} pasword={pasword} phonenumber={phonenumber} email={email}></Fetch>
    </div>
  );
}

export default Login;
