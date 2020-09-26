import { connect } from "react-redux";
import RoundResults from "./RoundResults";

const mapStateToProps = ({ roundsRemaining }, { record }) => ({
  roundsRemaining,
  record,
});

const mapDisptachToProps = (dispatch) => {
  return {
    handleDraw: () => dispatch({ type: "DRAW" }),
    handleNewGame: () => dispatch({ type: "NEW_GAME" }),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(RoundResults);
