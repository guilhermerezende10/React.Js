import styles from "./Text.module.css";

function Text({ children }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default Text;
