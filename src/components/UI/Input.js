import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default Input;
