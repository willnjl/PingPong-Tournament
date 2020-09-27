//checks if all matches are finished
export const checkRoundFin = (state) => {
  //callback function returns boolean
  const matchComplete = (match) => {
    return match.winner !== 0;
  };

  //is every match finished?
  let roundFin = state.games.every((match) => matchComplete(match));

  if (roundFin) {
    let record = [...state.record];
    let round = state.games.map((game) => {
      return {
        ...game,
        //value is stored in each object becuase the objects are inside an array
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
