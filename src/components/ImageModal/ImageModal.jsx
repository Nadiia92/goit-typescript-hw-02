/** @format */

import Modal from "react-modal";
import style from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({isOpen, onClose, imageData}) => {
  if (!imageData) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal">
      <img
        className={style.image}
        src={imageData.urls.regular}
        alt={imageData.alt_description}
      />
    </Modal>
  );
};

export default ImageModal;
