import { useState } from "react";
import styles from "./ShowMore.module.css"

function ShowMore({ children, maxLength }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (typeof children !== "string") return null;
  if (children.length === 0) return null;
  return (
    <>
      {isExpanded ? children : `${children.substring(0, Number(maxLength))}...`}
      <button className={styles.btn} onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Mostrar menos" : "Mostrar mais"}
      </button>
    </>
  );
}

export default ShowMore;
