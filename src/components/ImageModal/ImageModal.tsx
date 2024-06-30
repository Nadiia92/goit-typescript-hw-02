/** @format */

import Modal from "react-modal";
import {Image} from "../App/App.types";
import style from "./ImageModal.module.css";
import {FC} from "react";

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

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageData: Image | null;
}

const ImageModal: FC<ImageModalProps> = ({isOpen, onClose, imageData}) => {
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
        alt={imageData.alt_description || "Image"}
      />
    </Modal>
  );
};

export default ImageModal;
