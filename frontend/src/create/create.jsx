import React from "react";
import "./create.css";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

class ImagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    const myInput = document.getElementById("files");

    var formdata = new FormData();
    formdata.append("nameProduc", document.getElementById("ProductName").value);
    formdata.append("name", myInput.files[0], myInput.files[0].values);
    console.log(myInput.files[0]);
    formdata.append(
      "description",
      document.getElementById("description").value
    );
    formdata.append("price", document.getElementById("price").value);
    formdata.append("amount", document.getElementById("amount").value);

    event.preventDefault();

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch("http://localhost:3000/api/product/create", requestOptions)
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Producto agregado",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.error(err));
  };

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  render() {
    return (
      <div className="home">
        <head>
          <title>Main Page</title>
        </head>
        <body>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
              <a class="navbar-brand" href="#!">
                CS201252
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li class="nav-item">
                    <Link to="/create" className="nav-link">
                      Create
                    </Link>
                  </li>
                  <li className="nav-item"></li>
                </ul>
                <form class="d-flex">
                  <Link to="/" className="btn btn-outline-primary">
                    Logout
                  </Link>
                </form>
              </div>
            </div>
          </nav>
          <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
              <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Agregar Producto</h1>
              </div>
            </div>
          </header>
          <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <form method="post" onSubmit={this.handleSubmit}>
                  <p className=" lead fw-normal text-black">
                    Nombre del producto
                  </p>
                  <input
                    className="general mb-2"
                    type="text"
                    name="nameProduc"
                    id="ProductName"
                    ref={(node) => (this.inputNode = node)}
                  />
                  <p className=" lead fw-normal text-black">description</p>
                  <input
                    className="general mb-2"
                    type="text"
                    name="description"
                    ref={(node) => (this.inputNode = node)}
                    id="description"
                  />
                  <p className="lead fw-normal text-black">imagen</p>
                  <input
                    className="general mb-2"
                    type="file"
                    name="file"
                    id="files"
                    placeholder="Select a File"
                    onChange={this.handleChange}
                    ref={(node) => (this.inputNode = node)}
                  />
                  <td>
                    <tr>
                      <p className="lead fw-normal text-black">cantidad</p>
                      <input
                        id="amount"
                        className="cantidad mb-2"
                        type="number"
                        ref={(node) => (this.inputNode = node)}
                        name="amount"
                      />
                    </tr>
                  </td>
                  <td>
                    <tr>
                      <p className="lead fw-normal text-black">precio</p>
                      <input
                        id="price"
                        className="cantidad mb-2"
                        type="number"
                        name="price"
                        ref={(node) => (this.inputNode = node)}
                      />
                    </tr>
                  </td>
                  <a type="button" className="btn btn-success ms-auto">
                    <button
                      href="/home"
                      type="submit"
                      className="boton btn btn-chech "
                    >
                      Submit
                    </button>
                  </a>
                </form>
              </div>
            </div>
          </section>
          <footer class="py-5 bg-dark">
            <div class="container">
              <p class="m-0 text-center text-white">
                Luis Daniel Molina Alfaro 201252
              </p>
            </div>
          </footer>
        </body>
      </div>
    );
  }
}

export default ImagePicker;
