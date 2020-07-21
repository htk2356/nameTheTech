import React, { Component } from "react";
import "./App.css";
import Questions from "./componets/questions";
import Welcome from "./componets/welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "",
      start: false,
    };
    this.start = this.start.bind(this);
  }

  start(name) {
    this.setState(() => {
      return { start: true, player: name };
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.start ? (
          <Questions name={this.state.player} />
        ) : (
          <Welcome start={this.start} />
        )}
      </div>
    );
  }
}

export default App;
