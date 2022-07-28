import React from "react";
import axios from "axios";
import { useState as State } from "react";
import "./update.css";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    var formdata = new FormData();
    formdata.append("id", this.props.id);
    console.log(this.props.id);
    formdata.append("nameProduc", document.getElementById("titulo").value);
    formdata.append(
      "description",
      document.getElementById("descripcion").value
    );
    formdata.append("price", document.getElementById("precio").value);
    formdata.append("amount", document.getElementById("cantidad").value);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };
    fetch("http://localhost:3000/api/product/update", requestOptions)
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className=" lead fw-normal text-white">Nombre de producto</p>
        <input
          className="general mb-2"
          type="text"
          name="nameProduc"
          placeholder="Nombre producto"
          defaultValue={this.props.nameProduc}
          id="titulo"
          aria-label="default input example"
        />
        <p className=" lead fw-normal text-white">description</p>
        <input
          className="general mb-2"
          type="text"
          name="description"
          id="descripcion"
          defaultValue={this.props.description}
          placeholder="Descripción"
        />
        <td>
          <tr>
            <p className="lead fw-normal text-white">Precio</p>
            <input
              className="cantidad mb-2"
              type="number"
              name="amount"
              placeholder="Precio"
              id="precio"
              defaultValue={this.props.price}
              aria-label="default input example"
            />
          </tr>
        </td>
        <td>
          <tr>
            <p className="lead fw-normal text-white">Cantidad</p>
            <input
              className="cantidad mb-2"
              type="number"
              name="price"
              id="cantidad"
              placeholder="Cantidad"
              defaultValue={this.props.amount}
              aria-label="default input example"
            />
          </tr>
        </td>
        <button className="button" type="submit">
          Update
        </button>
      </form>
    );
  }
}

export default EditProduct;
