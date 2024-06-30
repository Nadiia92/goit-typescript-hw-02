/** @format */

import {FC} from "react";
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({onLoadMore}) => {
  return (
    <button onClick={onLoadMore} className={styles.button}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
