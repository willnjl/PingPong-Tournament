import React from "react";

export default function Player({ player, gameId, handleScore }) {
  return (
    <div className={"card__game"}>
      <div className={"player "}>
        <h3 className={"name"}>{player.name}</h3>
        <h3>{player.score}</h3>
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
    </div>
  );
}
