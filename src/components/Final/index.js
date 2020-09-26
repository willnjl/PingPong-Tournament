import { connect } from "react-redux";
import Final from "./Final";

const mapStateToProps = ({ games }) => ({ game: games[0] });

const mapDispatchToProps = (dispatch) => {
  return {
    handleScore: (playerId, gameId, value) =>
      dispatch({ type: "SCORE", playerId, gameId, value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Final);
