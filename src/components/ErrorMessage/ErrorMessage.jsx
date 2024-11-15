
const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
