/** @format */

import {FC} from "react";
import {Image} from "../App/App.types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  item: Image;
  onClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({item, onClick}) => {
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
