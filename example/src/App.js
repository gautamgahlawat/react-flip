import React, { Component } from "react";

import ReactFlip from "react-flip";

export default class App extends Component {

  handleClick = ()=> {

  }


  render() {
    return (
      <div>
        <ReactFlip front={'front side here'} back={'back is on the back'} action={'hover'} direction={'horizontal'}/>
        <button onClick={this.handleClick}>Press me!</button>
      </div>
    );
  }
}
