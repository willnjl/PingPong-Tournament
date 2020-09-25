import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ count, setup, games }) => ({ count, setup, games });

export default connect(mapStateToProps)(App);
