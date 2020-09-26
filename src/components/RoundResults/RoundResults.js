import React from "react";
import Table from "react-bootstrap/Table";
import RoundTitle from "../RoundTitle";

export default function RoundResults({
  roundsRemaining,
  record,
  handleDraw,
  handleNewGame,
}) {
  const makeRows = (game) => {
    return game.map((match) => {
      const { player1, player2, winner } = match;
      return (
        <tr>
          <td>{winner === 1 ? "🏅" : null}</td>
          <td>{player1.name}</td>
          <td>{player1.score}</td>
          <td>{player2.score}</td>
          <td>{player2.name}</td>
          <td>{winner === 2 ? "🏅" : null}</td>
        </tr>
      );
    });
  };

  let makeTable = (game) => {
    console.log(game);
    return <Table striped>{makeRows(game)}</Table>;
  };

  return (
    <div>
      {record.map((game) => {
        return <>{makeTable(game)}</>;
      })}
      )<button onClick={() => window.print()}>Print</button>
      {roundsRemaining > 0 ? (
        <button onClick={handleDraw}>Next Round...</button>
      ) : (
        <button onClick={handleNewGame}>New Game</button>
      )}
    </div>
  );
}
