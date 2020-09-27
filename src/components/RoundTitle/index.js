import React from "react";

export default function RoundTitle({ roundsRemaining }) {
  let title = (roundsRemaining) => {
    switch (roundsRemaining) {
      case 3:
        return "Quarter Final";
      case 1:
        return "Semi Final";
      case 0:
        return "Final 🏆";
    }
  };

  return (
    <div className={"round-title"}>
      <h3>{title(roundsRemaining)}</h3>
    </div>
  );
}
