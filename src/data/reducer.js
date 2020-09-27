import { initial } from "./initial";

const submit = (state, { names, rules }) => ({
  ...state,
  names,
  rules,
});

const randomName = (pool) => {
  return Math.floor(Math.random() * pool.length - 1);
};

const draw = (state) => {
  //converts array of names (strings) into and array of 'player' objects
  const pool = state.names.map((name, index) => {
    return {
      name,
      score: 0,
    };
  });

  //pair players off into games
  const newGames = [];
  if (pool.length > 1) {
    let index = 0;
    while (pool.length > 0) {
      let a = randomName(pool),
        b = randomName(pool);
      if (a !== b) {
        //adds required object properties for a new match
        let match = {
          //id allows the score function to identify the location of a score action
          id: index,
          //winner used mainly for styling and displaying results
          winner: 0,
          player1Serving: true,
          player1: { ...pool.splice(a, 1)[0], id: 1 },
          player2: { ...pool.splice(b, 1)[0], id: 2 },
        };
        newGames.push(match);
        index += 1;
      }
    }
  }

  return {
    ...state,
    setup: true,
    roundFin: false,
    games: newGames,
    pool,
    names: [],
  };
};

//adds score to player and calculates service
const score = (state, action) => {
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

//win checks for if a specific match has ended
const winCheck = ({ state, action }) => {
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

//checks if all matches are finished
const checkRoundFin = (state) => {
  //callback function
  const checkComplete = (game) => {
    return game.winner !== 0;
  };

  let roundFin = state.games.every((game) => checkComplete(game));

  if (roundFin) {
    let record = [...state.record];
    let round = state.games.map((game) => {
      return {
        ...game,
        //used later to give titles to rounds
        roundsRemaining: state.roundsRemaining,
      };
    });
    //use unshift so when mapped over newest comes first
    record.unshift(round);
    return {
      ...state,
      roundFin,
      record,
    };
  }

  return state;
};

//creates pool from remaining players
const selectWinners = (state) => {
  const { games } = state;

  //reduce returns flat array of just names so the draw function can be reused
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

const roundsRemaining = (state) => {
  return {
    ...state,
    roundsRemaining: state.games.length - 1,
    //number of remaining rounds of matches in KO competition is number of games - 1
  };
};

//resets but retains user's settings
const reset = (state, initial) => {
  return {
    ...initial,
    rules: state.rules,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SCORE":
      //returning state allows us to use function composition
      return checkRoundFin(winCheck(score(state, action)));
    case "DRAW":
      return roundsRemaining(draw(selectWinners(state)));
    case "SUBMIT":
      return roundsRemaining(draw(submit(state, action)));
    case "NEW_GAME":
      //resets but retains user's settings
      return reset(state, initial);
    default:
      return state;
  }
};
