import { connect } from "react-redux";
import Setup from "./Setup";

const mapStateToProps = ({ count }) => ({
  count,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitSetup: ({ names, rules }) =>
      dispatch({ type: "SUBMIT", names, rules }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setup);
