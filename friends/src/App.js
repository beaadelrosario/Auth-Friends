import React from "react";

import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"
import FriendsList from "./components/FriendsList"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Build an app that renders list of friends retrieved from a server that uses tokens for authentication</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
