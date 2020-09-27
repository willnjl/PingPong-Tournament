import { connect } from "react-redux";
import Round from "./Round";

const mapStateToProps = ({ roundsRemaining, games, roundFin, record }) => ({
  roundsRemaining,
  games,
  roundFin,
  record,
});

export default connect(mapStateToProps)(Round);
