const submit = (state, { names, rules }) => ({
  ...state,
  names,
  rules,
});

const draw = (state) => {
  const randomName = (pool) => {
    return Math.floor(Math.random() * pool.length - 1);
  };

  const games = [];

  const pool = state.names.map((name, index) => {
    return {
      id: index,
      name,
      score: 0,
    };
  });

  let index = 0;
  while (pool.length > 0) {
    let a = randomName(pool),
      b = randomName(pool);
    if (a !== b) {
      let match = {
        id: index,
        player1: pool.splice(a, 1)[0],
        player2: { ...pool.splice(b, 1)[0] },
      };
      games.push(match);
      index += 1;
    }
  }

  return {
    ...state,
    names: [],
    setup: true,
    games,
    pool,
  };
};

const score = (state, { playerId, gameId, value }) => {
  const { games } = state;

  let updatedGames = games.map((game, i) => {
    let { player1, player2 } = game;
    if (i === gameId) {
      if (playerId === 0 && player1.score + value >= 0) {
        return {
          ...game,
          player1: {
            ...player1,
            score: player1.score + value,
          },
        };
      } else if (player2.score + value >= 0) {
        return {
          ...game,
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
    ...state,
    games: updatedGames,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SCORE":
      return score(state, action);
    case "SUBMIT":
      return draw(submit(state, action));
    default:
      return { ...state };
  }
};
