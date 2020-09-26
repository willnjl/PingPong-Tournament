import React from "react";

export default function RoundResults({ record, handleClick }) {
  {
    console.log(record);
  }
  return (
    <div>
      <table>
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
      </table>
      <button onClick={handleClick}>Draw</button>
    </div>
  );
}
