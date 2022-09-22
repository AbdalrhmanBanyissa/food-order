import React from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        htmlFor="amount"
        type="number"
        min="1"
        max="5"
        defaultValue="1"
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
