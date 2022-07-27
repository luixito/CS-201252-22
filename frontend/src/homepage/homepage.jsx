import React from "react";
import "./homepage.css";
import Product from "./product.jsx";
import { Link } from "react-router-dom";

const homepage = () => {
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
              <h1 class="display-4 fw-bolder">Home Page</h1>
              <p class="lead fw-normal text-white-50 mb-0">Vea productos</p>
            </div>
          </div>
        </header>
        <section class="py-5">
          <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <Product></Product>
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
};

export default homepage;
