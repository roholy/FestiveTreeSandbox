import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import CreateUser from "./components/User";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Board from "./components/Board";
import "./styles.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/createuser">Create User</Link>
        </li>
        <li>
          <Link to="/Feed">Feed</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/Board">To do list</Link>
        </li>
      </ul>
      <Route path="/login" component={Login} />
      <Route path="/createuser" component={CreateUser} />
      <Route path="/feed" component={Feed} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Board" component={Board} />
    </div>
  </Router>
);
const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
