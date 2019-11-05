import React from 'react';
class Task extends React.Component {
 render(){
     return(
       <li>
       <div className="row taskrow">
        <div className="col-4 col-md-2">
         <input type="checkbox" aria-label="Checkbox for following text input"></input>
   </div>
          <div className="col-12 col-md-6">
           {this.props.task.taskDescription}
   </div>
          <div className="col-4 col-md-2">
          <button type="button" class="btn btn-primary">Done</button>
   </div>
         <div className="col-4 col-md-2">
         <button type="button" class="btn btn-dark">
         Delete</button>
     </div>
  </div>
  </li>
 );
}
}
export default Task;