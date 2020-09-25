import React, { Component } from "react";

export default class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: "",
      names: [],
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
        field: "",
        names: [...names, field],
      });
    }
  }

  handleChange(e) {
    let input = e.currentTarget.value;
    this.setState({
      field: input,
    });
  }
  render() {
    const scoreToWinOptions = [21, 11, 7];
    const alternateServeOptions = [5, 3, 2];

    return (
      <div>
        <ul>
          {this.state.names.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>

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
          <input
            onChange={(e) => this.handleChange(e)}
            value={this.state.field}
          />
          <button onClick={(e) => this.addPlayer(e)}>add player</button>
          {this.state.names.length % 2 === 0 ? (
            <button onClick={(e) => this.handleSubmit(e)}>submit</button>
          ) : (
            <button disabled>submit</button>
          )}
        </form>
      </div>
    );
  }
}
