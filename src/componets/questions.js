import React, { Component } from "react";
import techs from "./allquestions";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.name,
      score: 0,
      hints: 3,
      toHint: 4,
      input: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleHint = this.handleHint.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }
  componentDidUpdate() {
    this.checkMatch();
  }
  handleInput(e) {
    this.setState({
      input: e.target.value,
    });
  }
  checkMatch() {
    const names = techs.map((obj) => obj.name);
    let input = this.state.input;
    if (
      input !== "" &&
      names.indexOf(input) !== -1 &&
      !document
        .getElementById(String(names.indexOf(input)))
        .classList.contains("showing")
    ) {
      document
        .getElementById(String(names.indexOf(input)))
        .classList.add("showing");
      document.getElementById(String(names.indexOf(input))).innerHTML =
        names[names.indexOf(input)];
      document
        .getElementById(String(names.indexOf(input)))
        .classList.remove("hidden");
      this.setState((prevState) => {
        const newScore = prevState.score++;
        let toHint = prevState.toHint--;
        let hints = prevState.hints;

        if (toHint === 0) {
          hints++;
          toHint = 4;
        }
        console.log("called by : ", input);
        console.log("to Hints ", toHint);

        return {
          input: "",
          score: newScore,
          toHint: toHint,
          hints: hints >= 6 ? 6 : hints,
        };
      });
    }
  }
  handleHint(id) {
    if (this.state.hints === 0) return;
    const names = techs.map((obj) => obj.name);
    document.getElementById(id).innerHTML = names[Number(id)];
    document.getElementById(id).classList.add("hint");
    setTimeout(() => {
      document.getElementById(id).classList.remove("hint");
      document.getElementById(id).innerHTML = "";
    }, 100);
    this.setState((prevState) => {
      return { hints: prevState.hints-- };
    });
  }

  question = techs;
  render() {
    return (
      <div>
        <nav className="nav">
          <header className="header">Name the Tech</header>
          <input
            id="input"
            type="text"
            value={this.state.input}
            onChange={this.handleInput}
          />
        </nav>
        <div className="scores">
          <p>
            {this.state.player}: {this.state.score}
          </p>
          <p>Hints: {this.state.hints}</p>
        </div>
        <div className="container">
          {this.question.map((obj, index) => (
            <div key={obj.name} className="question">
              <div
                className="svg"
                onClick={() => this.handleHint(String(index))}
              >
                {obj.svg}
              </div>
              <div className="name hidden" id={String(index)}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Questions;
