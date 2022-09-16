import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News
                keys="general"
                pageSize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                keys="business"
                pageSize={5}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                keys="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                keys="general"
                pageSize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News keys="health" pageSize={5} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News
                keys="science"
                pageSize={5}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News keys="sports" pageSize={5} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News
                keys="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
