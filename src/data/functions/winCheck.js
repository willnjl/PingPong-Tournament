//win checks for if a specific match has ended
export const winCheck = ({ state, action }) => {
  const { games, rules } = state;
  const { gameId } = action;

  let updatedGames = games.map((game, i) => {
    if (i === gameId) {
      const { player1, player2 } = game;
      //has player won with a required margin 2
      if (
        player1.score >= rules.scoreToWin &&
        player1.score - player2.score > 2
      ) {
        return {
          ...game,
          winner: 1,
        };
      }
      if (
        player2.score >= rules.scoreToWin &&
        player2.score - player1.score > 2
      ) {
        return {
          ...game,
          winner: 2,
        };
      }
    }

    return game;
  });

  return {
    ...state,
    games: updatedGames,
    //action data no longer needed
  };
};
