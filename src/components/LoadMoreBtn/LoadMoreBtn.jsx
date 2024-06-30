/** @format */

import styles from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({onLoadMore}) => {
  return (
    <button onClick={onLoadMore} className={styles.button}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
