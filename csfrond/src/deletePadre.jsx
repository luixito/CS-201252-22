import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Delete = ({ id }) => {
  const [idobjetivo, setId] = useState(id);

  const handleChange = (e) => {
    setId(id.id);
  };

  const handleSubmit = (e) => {
    handleChange();
    e.preventDefault();
    const userData = {
      usuarioId: idobjetivo,
    };

    axios.delete(
        `http://localhost:3000/api/user/deletepadre?usuarioId=${userData.usuarioId}`,
        {},
        {
          params: {
            usuarioId: userData.usuarioId,
          },
        }
      )
      Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "Usuario eliminado con exito!",
        });
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <button>Eliminar</button>
      </form>
    </div>
  );
};

export default Delete;
