import { connect } from "react-redux";
import RoundResults from "./RoundResults";

const mapStateToProps = ({ record }) => ({ record });

const mapDisptachToProps = (dispatch) => {
  return {
    handleClick: () => dispatch({ type: "DRAW" }),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(RoundResults);
