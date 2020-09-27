import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ setup, roundFin, handleClick }) => ({
  setup,
  roundFin,
  handleClick,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: "NEW_GAME" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
