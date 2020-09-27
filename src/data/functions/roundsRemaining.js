// https://www.neelocean.com/how-many-games-in-a-tournament/#:~:text=Total%20matches%20in%20a%20knockout%20tournament%20%3D%20S%20%3D%20n%20%E2%80%93%201&text=All%20of%20that%20complicatedness%20turns,matches%20in%20a%20knockout%20tournament.

export const roundsRemaining = (state) => {
  return {
    ...state,
    roundsRemaining: state.games.length - 1,
    //number of remaining rounds of matches in KO competition is number of games - 1
  };
};
