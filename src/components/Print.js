import React from "react";

export default function Print({ roundFin }) {
  return roundFin ? (
    <button className={"print"} onClick={() => window.print()}>
      Print
    </button>
  ) : null;
}
