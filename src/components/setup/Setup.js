import React, { Component } from "react";

export default class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ["", ""],
      numOfPlayers: 2,
      numOfPlayers: 2,
      rules: {
        scoreToWin: 21,
        alternateServe: 5,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setScoreToWin = this.setScoreToWin.bind(this);
    this.setAlternateServe = this.setAlternateServe.bind(this);
  }

  setAlternateServe(e) {
    this.setState({
      rules: {
        ...this.state.rules,
        alternateServe: e.currentTarget.value,
      },
    });
  }
  setScoreToWin(e) {
    this.setState({
      rules: {
        ...this.state.rules,
        scoreToWin: e.currentTarget.value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.names.length % 2 === 0) {
      this.props.submitSetup(this.state);
    }
  }
  addPlayer(e) {
    e.preventDefault();
    const { names, field } = this.state;
    if (field !== "") {
      this.setState({
        names: [...names, field],
      });
    }
  }

  handleNumOfPlayers(e) {
    const { names, numOfPlayers } = this.state;
    let selectedValue = e.currentTarget.value;
    let namesCopy = [...this.state.names];
    if (selectedValue > numOfPlayers) {
      for (let i = namesCopy.length; i < selectedValue; i += 1) {
        namesCopy.push("");
      }
    } else {
      namesCopy = names.filter((_, i) => i < e.currentTarget.value);
    }
    this.setState({
      names: namesCopy,
      numOfPlayers: e.currentTarget.value,
    });
  }

  handleChange(e, index) {
    let input = e.currentTarget.value;
    let updatednames = [...this.state.names];
    updatednames[index] = input;
    this.setState({
      names: updatednames,
    });
  }

  render() {
    const scoreToWinOptions = [21, 11, 7];
    const alternateServeOptions = [5, 3, 2];
    const numOfPlayers = [2, 4, 8];
    const inputs = [];

    for (let i = 0; i < this.state.numOfPlayers; i += 1) {
      inputs.push(
        <input
          key={i}
          onChange={(e) => this.handleChange(e, i)}
          value={this.state.names[i]}
          required
        />
      );
    }

    const namesFilled = this.state.names.every((name) => name !== "");

    return (
      <div>
        <form>
          <select name="scoreToWin" onChange={(e) => this.setScoreToWin(e)}>
            {scoreToWinOptions.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          <select
            name="alternateServe"
            onChange={(e) => this.setAlternateServe(e)}
          >
            {alternateServeOptions.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          <select
            name="numOfPlayers"
            onChange={(e) => this.handleNumOfPlayers(e)}
          >
            {numOfPlayers.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          {inputs.map((input) => input)}

          {namesFilled ? (
            <button onClick={(e) => this.handleSubmit(e)}>submit</button>
          ) : (
            <button disabled>submit</button>
          )}
        </form>
      </div>
    );
  }
}
