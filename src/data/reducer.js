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
        winner: 0,
        player1Serving: true,
        player1: { ...pool.splice(a, 1)[0], id: 1 },
        player2: { ...pool.splice(b, 1)[0], id: 2 },
      };
      games.push(match);
      index += 1;
    }
  }

  return {
    ...state,
    names: [],
    setup: true,
    roundFin: false,
    games,
    pool,
  };
};

const score = (state, { playerId, gameId, value }) => {
  const { games } = state;

  let updatedGames = games.map((game, i) => {
    const { player1, player2 } = game;
    if (i === gameId) {
      let service =
        (player1.score + player2.score + value) % state.rules.alternateServe ===
        0
          ? !game.player1Serving
          : game.player1Serving;

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
    ...state,
    games: updatedGames,
  };
};

const winCheck = (state) => {
  const { games, rules } = state;
  let updatedGames = games.map((game) => {
    const { player1, player2 } = game;
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
    return game;
  });

  return {
    ...state,
    games: updatedGames,
  };
};

const checkFin = (state) => {
  const checkComplete = (game) => {
    return game.winner !== 0;
  };

  let roundFin = state.games.every((game) => checkComplete(game));

  return {
    ...state,
    roundFin,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SCORE":
      return checkFin(winCheck(score(state, action)));
    case "SUBMIT":
      return draw(submit(state, action));
    default:
      return { ...state };
  }
};
