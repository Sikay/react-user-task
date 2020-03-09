import React, { Component } from "react";
import logo from "./logo.svg";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="Menu">
        <img src={logo} className="Menu-logo" alt="logo" />
        <div className="Menu-link">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Task
          </a>
        </div>
        <div className="Menu-react">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </nav>
    );
  }
}

export default Navigation;
