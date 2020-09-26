import React from "react";
import Table from "react-bootstrap/Table";
import RoundTitle from "../RoundTitle";

export default function RoundResults({
  roundsRemaining,
  record,
  handleDraw,
  handleNewGame,
}) {
  return (
    <div>
      <RoundTitle roundsRemaining={roundsRemaining} />
      <Table striped>
        {/* <thead>
          <th></th>
          <th>player1</th>
          <th>score</th>
          <th>score</th>
          <th>player2</th>
        </thead> */}
        <tbody>
          {record.map((game) => {
            const { player1, player2, winner } = game;
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
          })}
        </tbody>
      </Table>
      <button onClick={() => window.print()}>Print</button>
      {roundsRemaining > 0 ? (
        <button onClick={handleDraw}>Next Round...</button>
      ) : (
        <button onClick={handleNewGame}>New Game</button>
      )}
    </div>
  );
}
