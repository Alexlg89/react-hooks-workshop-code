import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonClass from "./components/ButtonClass";
import ButtonHook from "./components/ButtonHook";
import ButtonClassContext from "./components/ButtonClassContext";
import ButtonHookContext from "./components/ButtonHookContext";
import { SomeContext } from "./helper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#4EEE94",
      visible: false,
      context: false
    };
  }

  triggerVisibility() {
    this.setState({
      visible: !this.state.visible
    });
  }

  triggerContext() {
    this.setState({
      context: !this.state.context
    });
  }

  changeColor() {
    const colors = ["#4EEE94", "#F06261", "#F6E20E", "#8E5029"];
    const newColor = colors[Math.floor(Math.random() * colors.length)];

    if (this.state.color === newColor) {
      return this.changeColor();
    }

    this.setState({
      color: newColor
    });
  }

  myHolyFunction(origin) {
    console.log(`I am the holy function called by ${origin} !`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <button
          onClick={() => {
            this.triggerVisibility();
          }}
        >
          trigger visibility
        </button>

        <label htmlFor="context">Use Context:</label>
        <input
          id="context"
          type="checkbox"
          checked={this.state.context}
          onChange={() => {
            this.triggerContext();
          }}
        />

        <button onClick={() => this.changeColor()}>change color</button>
        {this.state.visible &&
          (this.state.context ? (
            <SomeContext.Provider
              value={{
                state: { color: this.state.color },
                actions: { myHolyFunction: this.myHolyFunction }
              }}
            >
              <ButtonClassContext />
              <ButtonHookContext />
            </SomeContext.Provider>
          ) : (
            <>
              <ButtonClass color={this.state.color} />
              <ButtonHook color={this.state.color} />
            </>
          ))}
      </div>
    );
  }
}

export default App;
