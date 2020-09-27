import { connect } from "react-redux";
import Game from "./Match";

const mapStateToProps = ({ games, rules }, { gameId }) => ({
  game: games[gameId],
  alternateServe: rules.alternateServe,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleScore: (playerId, gameId, value) =>
      dispatch({ type: "SCORE", playerId, gameId, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
