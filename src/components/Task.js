import React, { Component } from "react";
import "./Task.css";
import { tasks } from "./tasks.json";

class Task extends Component {
  mapTaskToHtmlCard() {
    const htmlTask = tasks.map(task => (
      <div className="task-card">
        <div className="task-card__header">
          <h3>{task.title}</h3>
        </div>
        <div className="task-card__priority">
          <span className="badge">{task.priority}</span>
        </div>
        <div className="task-card__responsible">
          <p>{task.responsible}</p>
        </div>
        <div className="task-card__body">
          <p>{task.description}</p>
        </div>
      </div>
    ));
    return htmlTask;
  }

  render() {
    return <div className="task">{this.mapTaskToHtmlCard()}</div>;
  }
}

export default Task;
