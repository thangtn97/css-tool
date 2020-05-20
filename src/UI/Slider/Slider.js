import React from "react";
import styles from "./Slider.module.css";
const slider = (props) => {
  return (
    <div className={styles.Slider}>
      <label>{props.label}</label>
      <input
        type="range"
        value={props.value}
        min={props.min}
        max={props.max}
        onChange={(event) =>
          props.handleChange(event.target.value, props.propsName)
        }
      />
    </div>
  );
};
export default slider;
