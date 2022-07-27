import "../register/register.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Auten_acount = () => {
  const [state, setState] = useState({
    password: "",
    email: "",
  });
  const [habilita, setHabilita] = useState(true);

  const handleChange = (e) => {
    setState(true);
    setHabilita(!habilita);
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3000/api/user/update_pass", {
        password: state.password,
        email: state.email,
      })
      .then((response) => {
        console.log(response.status, "llegamos bien");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Contraseña cambiada",
          showConfirmButton: false,
          timer: 2000,
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
              Change pass
            </label>
            <label class="b-contain">
              <span class="b-contain">Agregue su nueva contraseña</span>
            </label>
            <input
          className="inp"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={state.password}
          onChange={handleChange}
        />
            <button className="button" disabled={habilita}>
              Cambiar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auten_acount;