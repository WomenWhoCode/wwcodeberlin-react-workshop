import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

class App extends Component {
  state = {
    selectedColor: 'white',
    // TODO: change manually the color in the state to a different one!
  }

  render() {
    return (
      <div className="App"style={{ backgroundColor: this.state.selectedColor}}>
      <h2>
        Buttons, Buttons!
      </h2>
      <div>
        <Button color={'green'} onClick={() => console.log('I am reacting!')}>Green</Button>
      </div>
    </div> 
    );
  }
}

export default App;
