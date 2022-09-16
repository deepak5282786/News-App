import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News keys="" pageSize={5} country="us" category="general" />
            </Route>
            <Route exact path="/business">
              <News keys="" pageSize={5} country="us" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News
                keys=""
                pageSize={5}
                country="us"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                keys="general"
                pageSize={5}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News keys="health" pageSize={5} country="us" category="health" />
            </Route>
            <Route exact path="/science">
              <News
                keys="science"
                pageSize={5}
                country="us"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News keys="sports" pageSize={5} country="us" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News
                keys="technology"
                pageSize={5}
                country="us"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
