/** @format */

import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({items, onImageClick}) => {
  return (
    <ul className={styles.gallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
