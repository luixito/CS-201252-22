import "../register/register.css";
import "./check.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Auten_acount = () => {
  const [state, setState] = useState({
    authen: true,
    email: "",
  });
  const [habilita, setHabilita] = useState(true);

  const handleChange = (e) => {
    setState(true);
    setHabilita(!habilita);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3000/api/user/update", {
        authen: state.authen,
        email: state.email,
      })
      .then((response) => {
        console.log(response.status, "llegamos bien");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Autentificacion exitosa exitoso",
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
        <div className="signup">
          <form onSubmitCapture={handleSubmit}>
            <label className="label " aria-hidden="true">
              Autentificacion
            </label>
            <label class="b-contain">
              <span class="b-contain">Agregue su correo</span>
            </label>
            <input
              className="inp"
              type="email"
              name="email"
              placeholder="Correo"
              value={state.email}
              onChange={handleChange}
            ></input>
            <label class="b-contain">
              <span>Acepta terminos de uso y condiciones</span>
              <input type="checkbox" onChange={handleChange}></input>
              <div class="b-input"></div>
            </label>
            <button className="button" disabled={habilita}>
              Autentificar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auten_acount;
