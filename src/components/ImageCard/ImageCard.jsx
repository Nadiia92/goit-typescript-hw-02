/** @format */

import styles from "./ImageCard.module.css";

const ImageCard = ({item, onClick}) => {
  return (
    <div className={styles.card}>
      <img
        src={item.urls.small}
        alt={item.alt_description || "Image"}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
