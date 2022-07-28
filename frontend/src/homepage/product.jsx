import React from "react";
import { useState as State } from "react";
import { useEffect as uEffect } from "react";
import DelInfo from "./DelProduc.jsx";
import { useModal as Mol } from "../modal/useModal.js";
import Modal from "../modal/modal.js";
import Update from "../updateitem/update";

const product = () => {
  const [abrir, abrirModal, cerrarModal] = Mol(false);
  const [error, setError] = State(null);
  const [isLoaded, setIsLoaded] = State(false);
  const [productos, setProductos] = State([]);

  uEffect(() => {
    fetch("http://localhost:3000/api/product/view")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProductos(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const renderProducto = () => {
    return (
      <div>
        {productos.map((product, index) => (
          <div class="col mb-5 ">
            <div class="card h-100">
              <img className="card-img-top" src={product.name} />
              <div class="card-body p-4 w-22">
                <ul className="cabeza">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.nameProduc}</h5>
                    <span className="fw-bolder">{product.description}</span>$
                    {product.price}
                    <span className="pe-3 text-muted"> Stock:</span>
                    <span className="pe-3">{product.amount}</span>
                  </div>
                  <div className="divchido">
                    <tr>
                      <td>
                        <DelInfo id={product.id}></DelInfo>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-dark"
                          onClick={abrirModal}
                        >
                          editar
                        </button>
                        <Modal abierto={abrir} cerrarModal={cerrarModal}>
                          {
                            <Update
                              nameProduc={product.nameProduc}
                              price={product.price}
                              id={product.id}
                              amount={product.amount}
                              description={product.description}
                            ></Update>
                          }
                        </Modal>
                      </td>
                    </tr>
                  </div>
                </ul>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="div">
      <table className="table table-borderless">{renderProducto()}</table>
    </div>
  );
};
export default product;
