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

export default connect(mapStateToProps)(App);
