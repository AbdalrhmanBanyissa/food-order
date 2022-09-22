import React from "react";

import styles from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={styles.description}>{props.item.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
