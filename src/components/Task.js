import React from 'react';
class Task extends React.Component {
  completeTask = () => {

    //this.props.completeTask(this.props.task.id);
  
  }
deleteTask = () => {
  alert('Are you sure?');
  //this.props.deleteTask(this.props.task.id)
}





render() {
const completed = this.props.task.completed;
return(
       <li>
       <div className="row taskrow">
         {completed && 
        <div className="col-4 col-md-2" completedTasks>
         
         {this.props.task.taskDescription}
   </div>
         }
         {!completed &&
          <div className="col-12 col-md-6">
           {this.props.task.taskDescription}
   </div>
         }
         {!completed &&
          <div className="col-4 col-md-2">
          <button type="button" class="btn btn-primary" onClick ={this.completeTask}>Done</button>
          {this.props.task.taskDescription}
   </div>
         }
         <div className="col-4 col-md-2">
         <button type="button" class="btn btn-dark" onClick={this.deleteTask}>
         Delete
         </button>
     </div>
  </div>
  </li>
 );
}
}
export default Task;