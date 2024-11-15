import styles from './LoadMoreBtn.module.css';
const LoadMoreButton = ({ onClick }) => {
  return (
    <button  className={styles.loadMoreBtn} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreButton;

