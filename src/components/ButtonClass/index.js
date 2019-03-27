import React from "react";

class ButtonClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("CLASS: I just mounted!");
  }

  componentWillUnmount() {
    console.log("CLASS: I am unmounting");
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.count !== this.state.count) {
      console.log("CLASS: count changed", this.state.count);
    }
    if (oldProps.color !== this.props.color) {
      console.log("CLASS: color changed", this.props.color);
    }
  }

  render() {
    return (
      <button
        style={{ backgroundColor: this.props.color }}
        onClick={() => this.setState({ count: this.state.count + 1 })}
      >
        C: {this.state.count}
      </button>
    );
  }
}

export default ButtonClass;
