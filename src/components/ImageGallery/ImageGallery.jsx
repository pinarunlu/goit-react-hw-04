import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, setModalImage }) => {
  const handleImageClick = (image) => {
    setModalImage(image); // Tıklanan resmi modal'a aktar
  };

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={styles.galleryItem}
          onClick={() => handleImageClick(image)} // Tıklama olayını ekle
        >
          <img
            className={styles.image}
            src={image.urls.small}
            alt={image.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

