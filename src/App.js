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
        <Button color={'green'} onClick={() => console.log('I am reacting!')}>Green</Button>
        {/* TODO: Use children for your component! */}
      </div>
    </div> 
    );
  }
}

export default App;
