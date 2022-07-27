import React from "react";
import axios from "axios";
import { useState as State } from "react";
import "./update.css";

function Update(props) {
  var imagen;
  const [state, setState] = State({
    id: props.id,
    name: "hola mundo",
    description: "",
    price: "",
    amount: "",
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
      id: props.id,
      name: state.name,
      description: state.description,
      price: state.price,
      amount: state.amount,
    };

    axios
      .put(`http://localhost:3000/api/product/update`, {
        id: userData.id,
        nombre: userData.name,
        des: userData.description,
        pres: userData.price,
        cant: userData.amount,
      })
      .then((res) => {
        console.log("resgood", res);
      })
      .catch((res) => {
        console.log("no llega");
        console.log(res);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <p className=" lead fw-normal text-white">description</p>
      <input
        className="general mb-2"
        type="text"
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      <p className="lead fw-normal text-white">imagen</p>
      <input
        value={imagen}
        onChange={handleChange}
        className="general mb-2"
        type="file"
        placeholder="Select a File"
      />
      <td>
        <tr>
          <p className="lead fw-normal text-white">cantidad</p>
          <input
            value={state.amount}
            onChange={handleChange}
            className="cantidad mb-2"
            type="number"
            name="amount"
          />
        </tr>
      </td>
      <td>
        <tr>
          <p className="lead fw-normal text-white">precio</p>
          <input
            value={state.price}
            onChange={handleChange}
            className="cantidad mb-2"
            type="number"
            name="price"
          />
        </tr>
      </td>
      <button className="boton btn btn-chech" type="submit">
        Update
      </button>
    </form>
  );
}

export default Update;
