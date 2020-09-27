import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({
  setup,
  games,
  roundFin,
  roundsRemaining,
  record,
}) => ({
  setup,
  games,
  roundFin,
  roundsRemaining,
  record,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: "NEW_GAME" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
