import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';

class App extends Component {
  state = {
    selectedColor: 'white',
    // TODO: we use "white" a lot now, so it would be better to extract it to a constant
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
        { this.state.selectedColor !== 'white' &&
          <Button onClick={() => this.setColor('white')}>Reset Color</Button>
        }
      </div>
    );
  }
}

export default App;
