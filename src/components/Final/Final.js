import React from "react";
import Player from "../player/Player";
import TournamentComplete from "../TournamentComplete";

export default function Final({ game, handleScore }) {
  const { player1, player2, player1Serving, winner } = game;
  return (
    <>
      <div className={"match-card"}>
        <Player
          player={player1}
          handleScore={handleScore}
          gameId={game.id}
          serving={player1Serving}
        />

        <Player
          player={player2}
          handleScore={handleScore}
          gameId={game.id}
          serving={!player1Serving}
        />
      </div>
    </>
  );
}
