import React from 'react';
import styles from './ErrorMessage.module.css'; // CSS modülü


const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
