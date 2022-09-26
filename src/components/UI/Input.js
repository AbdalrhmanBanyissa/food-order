import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
      />
    </div>
  );
});

export default Input;
