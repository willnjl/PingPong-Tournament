import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ count, setup, games, roundFin }) => ({
  count,
  setup,
  games,
  roundFin,
});

export default connect(mapStateToProps)(App);
