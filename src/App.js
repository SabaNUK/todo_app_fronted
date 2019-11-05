import React from 'react';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';


const uuidv4 = require('uuid/v4');

class App extends React.Component {

  state = {
    tasks: [ 
      {id: uuidv4(), taskDescription: "Buy milk", completed: false},
      {id: uuidv4(), taskDescription: "Walk dog", completed: true},
    ]
  };

  addTaskToList = (task) => {
    let tasks = this.state.tasks;

    tasks.push(task);

    this.setState({tasks: tasks});
  }


  render() {
    return (
      <div className="container">
        <Header />
        <AddTask newTask={this.addTaskToList} />
        <TaskCounter count={this.state.tasks.length} />
        <TaskList tasks={this.state.tasks} deleteTaskFunc={this.deleteTask} />
      </div>
    );
  }
}

export default App;