import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OBJECTIVES from "./data.json";

// You're on the good file to start

const TODAY = "2018-02-20";

class App extends Component {
  render() {
    console.log(OBJECTIVES.length)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {"Welcome to the JAVELO CHALLENGE! Good luck ;)"}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
