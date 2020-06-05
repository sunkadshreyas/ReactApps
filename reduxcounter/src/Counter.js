import React from 'react';

class Counter extends React.Component{
    render(){
        return (
            <div className="container">
                <button className="buttons" onClick={this.props.increaseCount}> + </button>
                <span className="number">{this.props.countValue}</span>
                <button className="buttons" onClick={this.props.decreaseCount}> - </button>
            </div>
        );
    }
}

export default Counter;