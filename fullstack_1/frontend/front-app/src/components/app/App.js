import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import Level1 from "../level1";
import Level2 from "../level2";
import Level3 from "../level3";
import Level4 from "../../containers/level4";

import { transformToD3Hierarchy } from "../../utils/transform";

import OBJECTIVES from "../../constants/data.json";
import "./App.css";

const formatedObjectives = transformToD3Hierarchy(OBJECTIVES);
const TODAY = "2018-02-20";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route
              path="/level1"
              render={() => <Level1 objectives={OBJECTIVES} today={TODAY} />}
            />
            <Route
              path="/level2"
              render={() => (
                <Level2 objectives={formatedObjectives} today={TODAY} />
              )}
            />
            <Route
              path="/level3"
              render={() => <Level3 objectives={OBJECTIVES} today={TODAY} />}
            />
            <Route path="/level4" render={() => <Level4 />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
