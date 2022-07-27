import "../register/register.css";
import React from "react";
import axios from "axios";
import { useState as State } from "react";
import Swal from "sweetalert2";
import {Link} from "react-router-dom"


const Recovery = () => {
  const [email, setEmail] = State("");
  const userData = {
    email: email,
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/user/recovery_password", {
        email: userData.email,
      })
      .then((response) => {
        console.log('response', response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Correo enviado",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error, response) => {
        console.log("error");
        console.log(error);
        console.log(userData);
        console.log("response", response);
      });
  };

  return (
    
    <div className="log">
      <div className="main">
        <div className="signup">
          <form onSubmit={handleSubmit}>
          <label className="label " aria-hidden="true">
              Change pass
            </label>
          <label class="b-contain">
              <span class="b-contain">Ingrese su correo de cuenta donde se enviara el link para la recuperacion</span>
            </label>
            <input
            className="inp"
              type="email"
              name="email"
              placeholder="Correo"
              value={email}
              onChange={handleChange}
            />
            <button className="button" type="submit">Recuperar</button>
          <Link to="/" className="btn btn-outline-primary">Back</Link>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
