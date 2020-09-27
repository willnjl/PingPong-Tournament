import React from "react";

export default function Reset({ handleClick, setup }) {
  return setup ? (
    <button className={"button--reset"} onClick={() => handleClick()}>
      reset
    </button>
  ) : null;
}
