import React from "react";
import axios from "axios";
import { useState } from "react";
import "./create.css";
import { Link } from "react-router-dom";

function Create() {
  const [file, setFile] = useState(null);
  const [state, setState] = useState({
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

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("originalname", file);
    console.log('file', file);
    form.append("description", state.description);
    form.append("price", state.price);
    form.append("amount", state.amount);
    console.log('form', form)
    console.log('state', state)

     axios
      .post("http://localhost:3000/api/product/create", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("resgood", res);
      })
      .catch((error) => {
        console.log("no llega");
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
              <form onSubmit={handleSubmit}>
                <p className=" lead fw-normal text-black">description</p>
                <input
                  className="general mb-2"
                  type="text"
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                />
                <p className="lead fw-normal text-black">imagen</p>
                <input
                  onChange={handleFile}
                  className="general mb-2"
                  type="file"
                  name="file"
                  placeholder="Select a File"
                />
                <td>
                  <tr>
                    <p className="lead fw-normal text-black">cantidad</p>
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
                    <p className="lead fw-normal text-black">precio</p>
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
                  Agregar
                </button>
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

export default Create;
