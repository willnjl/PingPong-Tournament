import React from "react";
import Player from "../player/Player";

export default function Game({ game, handleScore }) {
  const { player1, player2, winner, complete } = game;
  return (
    <>
      <Player player={player1} handleScore={handleScore} gameId={game.id} />;
      <Player player={player2} handleScore={handleScore} gameId={game.id} />;
    </>
  );
}
