import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Modals = ( ) => {
  const [isOpenModal1, openModal1,closeModal1] = useModal(false)

  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <div>
      <h2> Modales </h2>
      <button> Modal 1 </button>
      
      {/* Por cada modal que quiera controlar, utilizo la funcion creada en el useModal*/}
      <Modal>
        <h3> Modal 1</h3>
        <p>Contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
      <button> Modal 2</button>
      <Modal>
        <h3> Otro modal</h3>
        <p>Contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </Modal>
    </div>
  );
}

export default Modals;