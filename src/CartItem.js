import React from "react";

export default function CartItem(props) {
  return (
    <div className="summary-option" key={props.feature}>
      <div className="summary-option-label">{props.feature} </div>
      <div className="summary-option-value">
        {props.selected[props.feature].name}
      </div>
      <div className="summary-option-cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(props.selected[props.feature].cost)}
      </div>
    </div>
  );
}
