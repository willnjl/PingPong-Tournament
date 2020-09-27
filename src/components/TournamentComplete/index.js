import React from "react";
import MatchComplete from "../matchComplete/MatchComplete";
import RoundResults from "../RoundResults";

export default function TournamentComplete({ game, record }) {
  const { player1, player2, winner } = game;
  return (
    <>
      <MatchComplete player1={player1} player2={player2} winner={winner} />
      <RoundResults record={record} />
    </>
  );
}
