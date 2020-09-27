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
      let prize = match.roundsRemaining > 0 ? "🏅" : "🏆";
      return (
        <tr key={match.id}>
          <td>{winner === 1 ? prize : null}</td>
          <td className={!oneWon ? "strikethrough" : null}>{player1.name}</td>
          <td className={!oneWon ? "strikethrough" : null}>{player1.score}</td>
          <td className={oneWon ? "strikethrough" : null}>{player2.score}</td>
          <td className={oneWon ? "strikethrough" : null}>{player2.name}</td>
          <td>{winner === 2 ? prize : null}</td>
        </tr>
      );
    });
  };

  let makeTable = (game, i) => {
    return (
      <React.Fragment key={i}>
        <RoundTitle roundsRemaining={game[0].roundsRemaining} />
        <Table striped bordered hover>
          <tbody>{makeRows(game)}</tbody>
        </Table>
      </React.Fragment>
    );
  };

  return (
    <div className={"round_over"}>
      {record.map((game, i) => {
        return <React.Fragment key={i}>{makeTable(game)}</React.Fragment>;
      })}
      {roundsRemaining > 0 ? (
        <button className={"button"} onClick={handleDraw}>
          Next Round...
        </button>
      ) : (
        <button className={"button"} onClick={handleNewGame}>
          New Game
        </button>
      )}
    </div>
  );
}
