import React, { Component } from 'react';
import './ex1.css';

const A = class App extends Component{
  constructor()
  {
    super()
    this.state = {
      name : 0
    }
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id = "head">REACT BUTTON EXAMPLE</h1>
        <div id = "button">
          <button id = "b1">Sample Button</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button id = "b2">Matt is Awesome!</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button id = "b3">Sample Button</button>
        </div>
      </header>
    </div>
  );
}
}

export default A;
 