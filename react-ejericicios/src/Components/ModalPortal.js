import reactDom from "react-dom";
import "./Modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {
  //  ***************  IMPORTANTE *******************
  //Con este stopPropagation evito que la imagen modal se cierre al hacerle click encima
  const handleModalContainerClick = (e) => e.stopPropagation();
  return reactDom.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
    //Para hacer funcionar este portal, en el index.html agregué <div id="modal"></div>
  );
};

export default ModalPortal;
