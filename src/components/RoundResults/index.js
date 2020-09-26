import { connect } from "react-redux";
import RoundResults from "./RoundResults";

const mapDisptachToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: "DRAW" }),
  };
};
export default connect(null, mapDisptachToProps)(RoundResults);
