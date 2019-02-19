import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import Level1 from "../level1";
import Level2 from "../level2";
import Level3 from "../level3";

import "./App.css";

import OBJECTIVES from "../../constants/data.json";
const TODAY = "2018-02-20";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route
              path="/lvl1"
              render={() => <Level1 objectives={OBJECTIVES} today={TODAY} />}
            />
            <Route
              path="/lvl2"
              render={() => <Level2 objectives={OBJECTIVES} today={TODAY} />}
            />
            <Route
              path="/lvl3"
              render={() => <Level3 objectives={OBJECTIVES} today={TODAY} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
