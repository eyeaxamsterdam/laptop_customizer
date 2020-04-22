import React from "react";

export default function Total(props) {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );
  return (
    <div className="summary-total">
      <div className="total-price">
        <div className="summary-total-label">Your Price: </div>
        <div className="summary-total-value"></div>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(total)}
      </div>
    </div>
  );
}
