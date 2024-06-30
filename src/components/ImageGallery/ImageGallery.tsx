/** @format */

import ImageCard from "../ImageCard/ImageCard";
import {Image} from "../App/App.types";
import styles from "./ImageGallery.module.css";
import {FC} from "react";

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (item: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({items, onImageClick}) => {
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
