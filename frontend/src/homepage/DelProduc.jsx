import React from "react";
import axios from "axios";
import { useState as State } from "react";

function DelInfo({id}) {
    const [idobjetivo, setId] = State();

    const handleChange = (e) => {
        setId(id);
      };

      const handleSubmit = (e) => {  
        e.preventDefault();
        handleChange();

          axios
            .delete(`http://localhost:3000/api/product/delete`,{},
            {
              params: {
                id: idobjetivo,
              }
            })
            .then((res) => {
              console.log('resgood', res)
            })
            .catch((res) => {
            console.log('id', idobjetivo);
              console.log(res);
            });
    }
        return(
            <form  onSubmit={handleSubmit}>
                <button className="btn btn-outline-dark">Del</button>
            </form>
        );
}

export default DelInfo;