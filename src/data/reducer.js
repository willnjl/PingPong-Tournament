const submit = (state, { names, rules }) => ({
  ...state,
  names,
  rules,
});

const draw = (state) => {
  const randomName = (pool) => {
    return Math.floor(Math.random() * pool.length - 1);
  };

  const newGames = [];

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
      newGames.push(match);
      index += 1;
    }
  }

  return {
    ...state,
    names: [],
    setup: true,
    roundFin: false,
    games: newGames,
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

const checkRoundFin = (state) => {
  const checkComplete = (game) => {
    return game.winner !== 0;
  };

  let roundFin = state.games.every((game) => checkComplete(game));
  if (roundFin) {
    let record = state.games.map((game) => game);
    return {
      ...state,
      roundFin,
      record,
    };
  }

  return state;
};

const selectWinners = (state) => {
  const { games } = state;
  const winners = games.reduce((pool, current) => {
    let winner =
      current.winner === 1 ? current.player1.name : current.player2.name;
    pool.push(winner);
    return pool;
  }, []);

  return {
    ...state,
    names: winners,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SCORE":
      return checkRoundFin(winCheck(score(state, action)));
    case "SUBMIT":
      return draw(submit(state, action));
    case "DRAW":
      return draw(selectWinners(state));
    default:
      return { ...state };
  }
};
