import React from 'react';
import "./modal.css";

const Modal = ({children, abierto,cerrarModal}) => {

  return (
    <article className={`modal ${abierto&&"open"}`}>
        <div className='modal-contenedor'>
      <button className='modal-cerrar' onClick={cerrarModal}>X</button>
            {children}
        </div>
    </article>
  )
}

export default Modal