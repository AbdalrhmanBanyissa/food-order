import React, { useContext } from "react";

import styles from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && (
          <button
            onClick={() => {
              console.log("Ordering ...");
            }}
            className={styles.button}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
