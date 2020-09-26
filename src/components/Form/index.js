import { connect } from "react-redux";
import Form from "./Form";

const mapStateToProps = ({ count }) => ({
  count,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitSetup: ({ names, rules }) =>
      dispatch({ type: "SUBMIT", names, rules }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
