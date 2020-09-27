//adds score to player and calculates service
export const score = (state, action) => {
  const { games, rules } = state;
  const { playerId, gameId, value } = action;

  let updatedGames = games.map((game, i) => {
    //finds game which is source of action
    if (i === gameId) {
      const { player1, player2 } = game;

      //players only get 2 serves during deuce
      let dueceZone = rules.scoreToWin - 2;
      let tally = player1.score + player2.score + value;
      let numOfServes =
        player1.score + value >= dueceZone && player2.score + value >= dueceZone
          ? 2
          : rules.alternateServe;

      //service varible stored in global state
      let service =
        tally % numOfServes === 0 ? !game.player1Serving : game.player1Serving;

      //amend scoring player
      if (playerId === 1 && player1.score + value >= 0) {
        return {
          ...game,
          player1Serving: service,
          player1: {
            ...player1,
            score: player1.score + value,
          },
        };
      } else if (player2.score + value >= 0) {
        return {
          ...game,
          player1Serving: service,
          player2: {
            ...player2,
            score: player2.score + value,
          },
        };
      }
    }
    return game;
  });
  return {
    state: {
      ...state,
      games: updatedGames,
    },
    //return both state and action as one object so action can be destructured in the next function
    action,
  };
};
