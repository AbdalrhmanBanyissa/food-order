import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; //will return a string
    const customizedEnteredAmount = +enteredAmount; //will return a number

    if (
      enteredAmount.trim().length === "0" ||
      customizedEnteredAmount < 1 ||
      customizedEnteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(customizedEnteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        htmlFor="amount"
        type="number"
        min="1"
        max="5"
        defaultValue="1"
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default MealItemForm;
