import React, { Component } from "react";
import "./App.css";
import Button from "./Button.js";
import Icon from "./Icon.js";

const WHITE = "white";
class App extends Component {
  state = {
    selectedColor: WHITE
  };

  setColor = color => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.selectedColor }}
      >
        <h2>Buttons, Buttons!</h2>
        <div>
          <Button color={"green"} onClick={this.setColor}>
            Green
          </Button>
          <Button color={"red"} onClick={this.setColor}>
            Red
          </Button>
          <Button color={"blue"} onClick={this.setColor}>
            Blue
          </Button>
        </div>
        {this.state.selectedColor !== WHITE && (
          <Button onClick={() => this.setColor(WHITE)}>
            <Icon />
            Reset Color
          </Button>
        )}
      </div>
    );
  }
}

export default App;
