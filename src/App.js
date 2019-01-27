import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

class App extends Component {
  state = {
    selectedColor: 'white',
  }

  setColor = (color) => {
    this.setState({ selectedColor: color })
  }

  render() {
    return (
      <div className="App"style={{ backgroundColor: this.state.selectedColor}}>
      <h2>
        Buttons, Buttons!
      </h2>
      <div>
        <Button color={'green'} onClick={this.setColor}>Green</Button>
      </div>
    </div>
    );
  }
}

export default App;
