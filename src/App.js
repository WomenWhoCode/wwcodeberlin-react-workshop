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
        <Button color={"green"}></Button>
        {/* TODO: Add more buttons with different colors! */}
      </div>
    </div> 
    );
  }
}

export default App;
