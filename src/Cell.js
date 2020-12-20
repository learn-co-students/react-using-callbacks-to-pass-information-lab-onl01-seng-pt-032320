import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
           {/* color prop = used to set initial state of cell comp. and get a state value we can change below*/}
    this.state = {
      color: this.props.color
    }
  }

  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      {/* here we use the state value = (set above) to change the background color of the returned div  */}
      </div>
    )
  }
  
}