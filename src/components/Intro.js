import React from 'react';

class Intro extends React.Component {

    render() {
        return (
            <div className="row">
        <div className="col-12">
            <strong>{this.props.introParagraph}</strong>
         </div>
         </div>
        );


    }

}
export default Intro;