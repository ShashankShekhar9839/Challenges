import React from "react";
import "./input.scss";
import debounce from "lodash/debounce";

function Input({ onChange }) {
  const debouncedonChange = debounce((event) => {
    onChange(event);
  }, 300);

  return (
    <input
      type="text"
      placeholder="search"
      className="input"
      onChange={(event) => debouncedonChange(event)}
    />
  );
}

export default Input;
