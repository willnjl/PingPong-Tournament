import React, { Component } from "react";

//using a class based component here to make use of the local state.

export default class Form extends Component {
  constructor(props) {
    super(props);

    //local state tracks the values that the users as submitted for simplicity,
    //rather than update the gobal state everytime
    this.state = {
      names: ["", ""],
      toggleHover: false,
      numOfPlayers: 2,
      rules: {
        scoreToWin: this.props.rules.scoreToWin,
        alternateServe: this.props.rules.alternateServe,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setScoreToWin = this.setScoreToWin.bind(this);
    this.setAlternateServe = this.setAlternateServe.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
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
    //make sure they array the data type string for the correct number of names
    //otherwise we could have an array with undefined values.
    if (selectedValue > numOfPlayers) {
      for (let i = namesCopy.length; i < selectedValue; i += 1) {
        namesCopy.push("");
      }
    } else {
      //removes additional names if we decide to have less
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
  toggleHover() {
    this.setState({
      toggleHover: !this.state.toggleHover,
    });
  }

  render() {
    //place options in array so they can be quickly changed
    const scoreToWinOptions = [21, 11, 7];
    const alternateServeOptions = [5, 3, 2];
    const numOfPlayers = [2, 4, 8];
    const inputs = [];

    //generates an array with the correct number of inputs for the desired num of players
    for (let i = 0; i < this.state.numOfPlayers; i += 1) {
      inputs.push(
        <input
          key={i}
          onChange={(e) => this.handleChange(e, i)}
          value={this.state.names[i]}
          placeholder={"Player " + (i + 1) + "'s name"}
          maxLength="10"
          required
        />
      );
    }

    //validation check: have they all been filled out?
    const namesFilled = this.state.names.every((name) => name !== "");

    return (
      <form className={"form"}>
        <div className={"form__group"}>
          <label htmlFor={"scoreToWin"}>Score to win:</label>
          <select
            name="scoreToWin"
            onChange={(e) => this.setScoreToWin(e)}
            value={this.state.rules.scoreToWin}
          >
            {scoreToWinOptions.map((value, i) => {
              return (
                <option key={i} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className={"form__group"}>
          <label htmlFor={"alternateServe"}>Alternate serves every:</label>
          <select
            name="alternateServe"
            onChange={(e) => this.setAlternateServe(e)}
            value={this.state.rules.alternateServe}
          >
            {alternateServeOptions.map((value, i) => {
              return (
                <option key={i} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className={"form__group"}>
          <label htmlFor={"numOfPlayers"}>Number of competitors:</label>
          <select
            name="numOfPlayers"
            onChange={(e) => this.handleNumOfPlayers(e)}
          >
            {numOfPlayers.map((value, i) => {
              return (
                <option key={i} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className={"form__names-container"}>
          {inputs.map((input) => input)}
        </div>

        {/*validation here to check that all the names have been submited*/}
        {namesFilled ? (
          <button className={"button"} onClick={(e) => this.handleSubmit(e)}>
            submit
          </button>
        ) : (
          <div
            onPointerEnter={() => this.toggleHover()}
            onPointerLeave={() => this.toggleHover()}
          >
            <button disabled>submit</button>
          </div>
        )}
        <div className={"validator"}>
          {this.state.toggleHover ? <p>provide names to proceed</p> : <p></p>}
        </div>
      </form>
    );
  }
}
