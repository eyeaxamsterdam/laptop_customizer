import React from "react";

import CartItem from "./CartItem";
import Total from "./Total";

export default function Cart(props) {
  const summary = Object.keys(props.selected).map((key) => (
    <CartItem key={key} feature={key} {...props} />
  ));

  return (
    <section className="main-summary">
      <h3>Your Cart</h3>
      {summary}
      <Total {...props} />
    </section>
  );
}
