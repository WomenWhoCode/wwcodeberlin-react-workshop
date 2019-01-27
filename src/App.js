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
        <Button color={'green'} onClick={() => this.setColor('green')}>Green</Button>
        {/*
        TODO: Change the onClick prop for your buttons to avoid the duplication of the color value in the color and onClick props.
        This could easily lead to errors.
        Hint: You can use the color prop to decide which color to set in the onClick handler
        */}
      </div>
    </div>
    );
  }
}

export default App;
