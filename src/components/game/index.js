import { connect } from "react-redux";
import Game from "./Game";

const mapStateToProps = ({ games }, { gameId }) => ({
  game: games[gameId],
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleScore: (playerId, gameId, value) =>
      dispatch({ type: "SCORE", playerId, gameId, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
