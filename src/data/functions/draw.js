//Players are randomly paired to play each other.
//The function recieves the array of names (strings) in state,
//it then turns them into player objects with additions properties.
//it then pairs the players randomly and puts them inside a new object called a game,
//those game are given useful properties and stored in an array in the global state

//small helper function for generating a random player index
const randomName = (pool) => {
  return Math.floor(Math.random() * pool.length - 1);
};

export const draw = (state) => {
  //converts array of names (strings) into an array of 'player' objects
  const pool = state.names.map((name, index) => {
    return {
      name,
      score: 0,
    };
  });

  const newGames = [];

  //pair players off into games
  if (pool.length > 1) {
    let index = 0;
    while (pool.length > 0) {
      let a = randomName(pool),
        b = randomName(pool);
      if (a !== b) {
        //add required properties for a new match
        let match = {
          //id allows the score function to identify the source of a score action
          id: index,
          //winner used mainly for styling and displaying results
          winner: 0,
          player1Serving: true,
          //players are also given an id so the score function can identify the scorer
          player1: { ...pool.splice(a, 1)[0], id: 1 },
          //splice removes them from the pool so they cannot be reselected
          player2: { ...pool.splice(b, 1)[0], id: 2 },
          //splice return array so an index of 0 is use to return contents
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
