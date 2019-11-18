import React from 'react';
import './App.css';
import Header from './components/Header';
 import Task from './components/Task';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';


const uuidv4 = require('uuid/v4');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: uuidv4(), taskDescription: "Search Product", completed: false },
        { id: uuidv4(), taskDescription: "Check Availability of Product", completed: true },
        { id: uuidv4(), taskDescription: "check the delivery time and date", completed: false },
        { id: uuidv4(), taskDescription: "Pay for the Product", completed: true },
        { id: uuidv4(), taskDescription: "check the invoice", completed: false },
        { id: uuidv4(), taskDescription: "check calender dates", completed: false }
      ]
    };
  }
  addTaskToList = (task) => {
    let tasks = this.state.tasks;

    tasks.push(task);
    this.setState({ tasks: tasks });
  }
  deleteTask = (taskId) => {

    let tasks = this.state.tasks;

    let filteredTasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    this.setState({ tasks: filteredTasks });
  }


  completeTask = (taskId) => {
    const completeTask = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.completed = true
      }
      return task;
    });
    this.setState({ tasks: completeTask })
  }
  render() {
    return (
      <div className="container">
        <Header />
        <AddTask newTask={this.addTaskToList} />
        <TaskCounter count={this.state.tasks.length} />

        <TaskList tasks={this.state.tasks} completeTaskFunc={this.completeTask} deleteTaskFunc={this.deleteTask} />
      </div>
    )
  }
}
export default App;

