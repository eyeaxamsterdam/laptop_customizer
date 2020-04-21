import React from "react";
import "./App.css";

export default function Summary(props) {
  const summary = Object.keys(props.selected).map((key) => (
    <div className="summary-option" key={key}>
      <div className="summary-option-label">{key} </div>
      <div className="summary-option-value">{props.selected[key].name}</div>
      <div className="summary-option-cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(props.selected[key].cost)}
      </div>
    </div>
  ));

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  return (
    <section className="main-summary">
      <h3>Your Cart</h3>
      {summary}
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
    </section>
  );
}
