import './Modal.css'

const Modal = ({children, isOpen, closeModal}) => {
  
  //  ***************  IMPORTANTE *******************
  //Con este stopPropagation evito que la imagen modal se cierre al hacerle click encima
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick= {closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
          <button class="modal-close" onClick={closeModal}>X</button>
          {children}
      </div>
    </article>
  );
};

export default Modal;