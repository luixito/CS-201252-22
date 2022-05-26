import React, { } from "react";
import Imagenes from "./img/img"


function mostar(props){
        switch(props.value) {
          case 'camisa':
            return <div precio="21" className="back">
                  <img src={Imagenes.camisa} className="mostrarImg" alt="200px"/>
                  <h4>Descripcion: Camisa del funeral de tu abuelito</h4>
                  </div>
            ;
        case 'Pantalon':
            return <div className="back">
            <img src={Imagenes.pantalon} className="mostrarImg" alt="200px"/>
            <h4>Descripcion: Pantalones de mescliya hechos de algodon con color azul</h4>
            </div>
            ;
        case 'Blusa':
            return <div  className="back">
            <img src={Imagenes.blusa} className="mostrarImg" alt="200px"/>
            <h4>Descripcion: blusa minimalista hecha de seda</h4>
            </div>
            ;
        case 'Calcetas':
            return <div className="back">
            <img src={Imagenes.calcetas} className="mostrarImg" alt="200px"/>
            <h4>Descripcion: calcetas de algodon importadas de rusia</h4>
            </div>
            ;
        case 'Ropa interior':
            return <div className="back">
            <img src={Imagenes.ropain} className="mostrarImg" alt="200px"/>
            <h4>Descripcion:Ropa interior para toda la familia </h4>
            </div>
            ;
        case 'Bufanda':
            return <div className="back">
            <img src={Imagenes.bufanda} className="mostrarImg" alt="200px"/>
            <h4>Descripcion: Budanda tegida por una abuelita ciega de las montañas</h4>
            </div>
            ;
        case 'Saco':
              return <div className="back">
              <img src={Imagenes.saco} className="mostrarImg" alt="200px"/>
              <h4>Descripcion: Saco de robado de iron man</h4>
              </div>
              ;
        case 'Camison':
            return <div className="back">
            <img src={Imagenes.camison} className="mostrarImg" alt="200px"/>
            <h4>Descripcion: Camison de abuelita jiji</h4>
            </div>
            ;
        case 'Vestido':
            return <div className="back">
            <img src={Imagenes.vestido} className="mostrarImg" alt="200px"/>
            <h4>Descripcion: Vestido de cenicienta</h4>
            </div>
            ;
        case 'Corbata':
            return <div className="back">
            <img className="mostrarImg" src={Imagenes.corbata} alt="200px"/>
            <h4>Descripcion: Corbata confeccionada por duendes esclavos</h4>
            </div>
            ;
          default:
            return <div  className="back"><img src={Imagenes.X} className="mostrarImg" alt="200ox" /></div>
            ;
        }    
}


export default mostar;