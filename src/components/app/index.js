import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps)(App);
