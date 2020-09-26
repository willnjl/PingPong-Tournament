import React from "react";

export default function Player({ player, gameId, handleScore, serving }) {
  return (
    <div className={"player "}>
      <h3 className={"name info"}>{player.name}</h3>
      <div className={"info"}>{serving ? "🏓" : null}</div>
      <h3 className={"info"}>{player.score}</h3>
      <div className={"score-btn_container"}>
        <button
          className={"score-btn__minus"}
          onClick={() => handleScore(player.id, gameId, -1)}
        >
          -
        </button>
        <button
          className={"score-btn__plus"}
          onClick={() => handleScore(player.id, gameId, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
