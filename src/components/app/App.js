import React from "react";
import Form from "../Form";

import Reset from "../Reset";
import "../../styles/main.scss";
import Round from "../Round";
import Print from "../Print";

function App({ setup, games, roundFin, roundsRemaining, record, handleClick }) {
  return (
    <div className={"page-wrapper"}>
      <header className={"header"}>
        <h1 className={"title"}>Ping Pong Tournament</h1>
      </header>
      {!setup ? (
        <Form />
      ) : (
        <>
          <div className={"main"}>
            <Round />
          </div>
          <div className={"buttons-bottom"}>
            <Print roundFin={roundFin} />
            <Reset handleClick={() => handleClick()} setup={setup} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
