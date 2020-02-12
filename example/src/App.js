import React, { Component } from "react";

import ReactFlip from "react-flip";

export default class App extends Component {
  render() {
    return (
      <div>
        <ReactFlip front={'front side here'} back={'back is on the back'} action={'click'}/>
      </div>
    );
  }
}
