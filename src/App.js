import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <TaskForm />
        <Task />
      </div>
    );
  }
}

export default App;
