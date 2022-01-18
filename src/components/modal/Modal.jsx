import Modal from "react-modal";
import "./Modal.scss";

Modal.setAppElement("#app");

const PopupModal = ({
  width,
  height,
  children,
  title,
  openModal,
  closeModal,
}) => {
  const style = {
    width,
    height,
  };
  return (
    <Modal isOpen={openModal} className="modal">
      <div className="body" style={style}>
        <div className="header">
          <h3>{title}</h3>
          <button type="button" onClick={() => closeModal(false)}>
            <img src="/img/close-outline.svg" alt="close-outline" />
          </button>
        </div>
        {children}
      </div>
    </Modal>
  );
};
export default PopupModal;
