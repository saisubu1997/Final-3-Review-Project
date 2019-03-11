import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Gait Line Analysis</p>
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Served From Local Host <code>src/App.js</code>
          </p>
          <img
            src="https://cdn-images-1.medium.com/max/1600/1*1F2CGO_OyhOnp397-1ysNw.gif"
            alt="logo"
          />
          <p>Pipelined to Firebase.</p>
        </header>
      </div>
    );
  }
}

export default App;
