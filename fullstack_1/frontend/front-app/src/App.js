import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./header";
import Level1 from "./level1";

import "./App.css";
import OBJECTIVES from "./data.json";

const TODAY = "2018-02-20";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            {/* <Route exact path="/" component={Home} /> */}
            <Route
              path="/lvl1"
              render={() => <Level1 objectives={OBJECTIVES} today={TODAY} />}
            />
          </div>
        </Router>
        {/* <Route path="/lvl2" component={Level2} />
        <Route path="/lvl3" component={Level3} />
        <Route path="/lvl4" component={Level4} /> */}
      </div>
    );
  }
}

export default App;
