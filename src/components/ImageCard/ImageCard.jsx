
const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className={styles.card}>
      <img 
        src={src} 
        alt={alt} 
        className={styles.image} 
        onClick={onClick} // Tıklama olay işleyicisi <img>'ye eklendi
      />
    </div>
  );
};

export default ImageCard;

