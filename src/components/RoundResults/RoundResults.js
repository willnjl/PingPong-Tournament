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
      let oneWon = player1.score > player2.score;
      return (
        <tr>
          <td>{winner === 1 ? "🏅" : null}</td>
          <td className={!oneWon ? "strikethrough" : null}>{player1.name}</td>
          <td className={!oneWon ? "strikethrough" : null}>{player1.score}</td>
          <td className={oneWon ? "strikethrough" : null}>{player2.score}</td>
          <td className={oneWon ? "strikethrough" : null}>{player2.name}</td>
          <td>{winner === 2 ? "🏅" : null}</td>
        </tr>
      );
    });
  };

  let makeTable = (game) => {
    console.log(game[0]);
    return (
      <>
        <RoundTitle roundsRemaining={game[0].roundsRemaining} />
        <Table striped>
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>score</th>
              <th>score</th>
              <th>name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{makeRows(game)}</tbody>
        </Table>
      </>
    );
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
