import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Profile = (id) => {
  const [state, setState] = useState({
    nombre: "",
    paterno: "",
    materno: "",
    edad: "",
    padreId:id.id,
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
      nombre: state.nombre,
      paterno: state.paterno,
      materno: state.materno,
      edad: state.edad,
      padreId: id.id,
    };

    axios
      .post(
        "http://localhost:3000/api/user/inserthijo",
        {},
        {
          params: {
            nombre: state.nombre,
            paterno: state.paterno,
            materno: state.materno,
            edad: state.edad,
            padreId: state.padreId,
          },
        }
      )
      .then((response) => {
        console.log(response.status);
        console.log(userData);
        console.log(response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Cambio exitoso exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
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
          <p>
            <label for="chk" aria-hidden="true">
              Agregar Hijo
            </label>
          </p>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del hijo"
            value={state.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="paterno"
            placeholder="Apellido Paterno"
            value={state.paterno}
            onChange={handleChange}
          ></input>
          <input
            type="materno"
            name="materno"
            placeholder="Apellido Materno"
            value={state.materno}
            onChange={handleChange}
          />
          <input
            type="Number"
            name="edad"
            placeholder="edad"
            value={state.edad}
            onChange={handleChange}
          />
          <button>Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;