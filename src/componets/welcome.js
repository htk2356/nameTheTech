import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleName(e) {
    const newName = e.target.value;
    this.setState(() => {
      return { playerName: newName };
    });
  }
  handleClick() {
    if (this.state.playerName.length < 3) return;
    this.props.start(this.state.playerName);
  }
  render() {
    return (
      <div className="welcome">
        <div className="welcome-container">
          <h2>Name The Tech</h2>
          <div className="rules">
            <ol>
              <div className="name-input">
                <label htmlFor="name">Name : </label>
                <input
                  type="text"
                  name="name"
                  id="enter-name"
                  maxLength="10"
                  minLength="3"
                  onChange={(e) => this.handleName(e)}
                  required
                ></input>
              </div>
              <h3>Welcome {this.state.playerName}</h3>
              <li>Name as many Techs as possible</li>
              <li>Name should be more than 3 characters long</li>
              <li>No cheating</li>
              <li>
                There are <b>NO</b> capital letters or dots(.) in the naming
              </li>
              <li>To use hints simply click on the Logo</li>
              <li>You get additional hints after answering 4 correctly</li>
              <li>
                If you chose to use hint,the full name will flash very quickly
              </li>
              <div className="button">
                <button onClick={this.handleClick}>Play</button>
              </div>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
