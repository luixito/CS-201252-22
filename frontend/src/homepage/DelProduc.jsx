import React from "react";
import Swal from "sweetalert2";

function DelInfo(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("id", props.id);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: props.id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/product/delete", requestOptions)
      .then((result) => {
        console.log("result",result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Eliminacionecitosa exitoso",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className="btn btn-outline-dark">Del</button>
    </form>
  );
}

export default DelInfo;
