import {useState} from "react";

export const useModal = (estado = false) => {
  const [abierto, setAbierto] = useState(estado);

  const abrirModal = () => setAbierto(true);
  const cerrarModal = () => setAbierto(false);

  return[abierto, abrirModal, cerrarModal];
};