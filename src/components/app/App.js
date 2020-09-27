import React from "react";
import Form from "../Form";

import Reset from "../Reset";
import "../../styles/main.scss";
import Round from "../Round";

function App({ setup, games, roundFin, roundsRemaining, record, handleClick }) {
  return (
    <div className={"page-wrapper"}>
      <header className={"header"}>
        <h1 className={"title"}>Ping Pong Tournament</h1>
      </header>
      <div className={"main"}>{!setup ? <Form /> : <Round />}</div>
      <Reset handleClick={() => handleClick()} setup={setup} />
    </div>
  );
}

export default App;
