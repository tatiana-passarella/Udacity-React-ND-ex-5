import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    text: "",
  };

  handleInput = (updatedText) => {
    this.setState(() => ({
      text: updatedText,
    }));
  };

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            onChange={(event) => this.handleInput(event.target.value)}
            type="text"
            value={text}
            placeholder="Say Something"
          />
          <p className="echo">Echo:{text}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;