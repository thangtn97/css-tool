import React from "react";
import styles from "./Button.module.css";

const button = (props) => {
  return (
    <button
      className={styles.Button}
      style={props.style}
      onClick={() => props.clicked(props.type)}
    >
      {props.children}
    </button>
  );
};
export default button;
