import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({
  count,
  setup,
  games,
  roundFin,
  roundsRemaining,
}) => ({
  count,
  setup,
  games,
  roundFin,
  roundsRemaining,
});

export default connect(mapStateToProps)(App);
