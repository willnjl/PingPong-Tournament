import { draw } from "./functions/draw";
import { score } from "./functions/score";
import { winCheck } from "./functions/winCheck";
import { checkRoundFin } from "./functions/checkRoundFin";
import { selectWinners } from "./functions/selectWinners";
import { roundsRemaining } from "./functions/roundsRemaining";

import { initial } from "./initial";

const submit = (state, { names, rules }) => ({
  ...state,
  names,
  rules,
});

//resets but retains user's settings
const reset = (state, initial) => {
  return {
    ...initial,
    rules: state.rules,
  };
};

//redux reducer takes actions and returns updated state
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
