import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>
        Buttons, Buttons!
      </h2>
      <div>
        <Button></Button>
      </div>
    </div> 
    );
  }
}

export default App;
