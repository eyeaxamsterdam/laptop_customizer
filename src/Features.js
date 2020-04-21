import React from "react";
import Options from "./Options";
import "./App.css";

export default function Features(props) {
  const options = props.choices.map((item) => {
    const selectedClass =
      item.name === props.selected.name ? "feature-selected" : "";
    const featureClass = "feature-option " + selectedClass;

    return (
      <Options
        handleUpdate={props.onUpdate}
        choices={props.choices}
        featureClass={featureClass}
        selected={props.selected}
        item={item}
        part={props.part}
      />
    );
  });

  return (
    <div className="feature">
      <legend className="feature-name">{props.part}</legend>
      <ul className="feature-list">{options}</ul>
    </div>
  );
}
