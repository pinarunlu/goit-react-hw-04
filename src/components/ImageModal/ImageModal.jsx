import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

// React Modal için erişilebilirlik
Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, imageData }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        onClose(); // ESC tuşuna basıldığında modal'ı kapat
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        {imageData && (
          <>
            <img
              src={imageData.urls.regular}
              alt={imageData.alt_description || 'Image'}
              className={styles.modalImage}
            />
            <div className={styles.imageDetails}>
              <p><strong>Photographer:</strong> {imageData.user.name}</p>
              <p><strong>Likes:</strong> {imageData.likes}</p>
              <p><strong>Description:</strong> {imageData.description || 'No description available'}</p>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
