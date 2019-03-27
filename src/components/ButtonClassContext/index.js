import React from "react";
import { SomeContext } from "../../helper";

class ButtonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("CLASS: I just mounted!");
    this.props.context.actions.myHolyFunction("CLASS");
  }

  componentWillUnmount() {
    console.log("CLASS: I am unmounting");
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.count !== this.state.count) {
      console.log("CLASS: count changed", this.state.count);
    }
    if (oldProps.context.state.color !== this.props.context.state.color) {
      console.log("CLASS: color changed", this.props.context.state.color);
    }
  }

  render() {
    return (
      <button
        style={{ backgroundColor: this.props.context.state.color }}
        onClick={() => this.setState({ count: this.state.count + 1 })}
      >
        C: {this.state.count}
      </button>
    );
  }
}

class ButtonClassContext extends React.Component {
  render() {
    return (
      <SomeContext.Consumer>
        {context => <ButtonClass context={context} />}
      </SomeContext.Consumer>
    );
  }
}

export default ButtonClassContext;
