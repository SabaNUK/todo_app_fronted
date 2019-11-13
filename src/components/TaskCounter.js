import React from "react";

class TaskCounter extends React.Component {delete(id){
  this.props.delete(id);
}
  render() {
    return (
        <div className="row d-none d-md-block">
            <div className="col">
                You have {this.props.count} tasks remaining
            </div>
        </div>
    );
  }
}

export default TaskCounter;