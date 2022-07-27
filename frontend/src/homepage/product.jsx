import React from "react";
import axios from "axios";
import { useState as State } from "react";
import { useEffect as Effect } from "react";
import DelInfo from "./DelProduc.jsx";
import Update from "../updateitem/update.jsx";
import { useModal as Umodal } from "../modal/useModal.js";
import Modal from "../modal/modal.js";

const product = () => {
  const [abrir, abrirModal, cerrarModal] = Umodal(false);
  const GetInfo = () => {
    const [item, setItem] = State([]);

    Effect(() => {
      axios
        .get("http://localhost:3000/api/product/view")
        .then((res) => {
          setItem(res.data);
          console.log(item.name);
        })
        .catch((res, err) => {
          console.log(err);
          console.log(res);
        });
    }, []);

    return (
      <div>
        {item.map((item) => (
          <div key={item.name} class="col mb-5">
            <div class="card h-100">
              <img
                
                alt="..."
              /><source className="card-img-top" src={`../../../backend/assets/img/${item.name}`}></source>
              <div class="card-body p-4">
                <ul className="cabeza">
                  <div className="text-center">
                    <h5 className="fw-bolder">{item.description}</h5>
                    {item.price}$
                  </div>
                  <div className="divchido">
                  <DelInfo id={item.id}></DelInfo>
                  <button className="btn btn-outline-dark" onClick={abrirModal}>update</button>
                  <Modal abierto={abrir} cerrarModal={cerrarModal}>
                    {<Update id={item.id}></Update>}
                  </Modal>
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

  return <GetInfo></GetInfo>;
};

export default product;
