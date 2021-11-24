import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ContactForm from './ContactForm'
import SongSearch from "./SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = ( ) => {
  const [isOpenModal1, openModal1,closeModal1] = useModal(false)

  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);

   const [isOpenSong, openModalSong, closeModalSong] = useModal(false);

   const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);
  return (
    <div>
      <h2> Modales </h2>

      <button onClick={openModal1} closeModal={closeModal1}>
        Modal 1
      </button>
      {/* Por cada modal que quiera controlar, utilizo la funcion creada en el useModal*/}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3> Modal 1</h3>
        <p>Contenido de mi modal 1</p>
        <img src="https://placeimg.com/600/600/animals" alt="animals" />
      </Modal>

      <button onClick={openModal2} closeModal={closeModal2}>
        Modal 2
      </button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3> Otro modal</h3>
        <p>Contenido de mi modal 2</p>
        <img src="https://placeimg.com/600/600/nature" alt="nature" />
      </Modal>

      <button onClick={openModalContact}>Modal contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>

      <button onClick={openModalSong}>Modal Canciones</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>

      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
            <h3>Modal en Portal</h3>
            <p>
              Este es el contenido de un modal que carga en otro nodo del DOM
              diferente a donde carga nuestra app de React, gracias a un React
              Portal.
            </p>
            <img src="https://placeimg.com/400/400/tech" alt="Tech" />
      </ModalPortal>
    </div>
  );
}

export default Modals;