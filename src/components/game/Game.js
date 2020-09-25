import React from "react";
import Player from "../player/Player";

export default function Game({ game, handleScore }) {
  const { player1, player2, player1Serving, winner } = game;

  return (
    <div className={"card__game"}>
      {winner === 0 ? (
        <>
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
        </>
      ) : (
        <h1>{player1.name}WON!</h1>
      )}
    </div>
  );
}
