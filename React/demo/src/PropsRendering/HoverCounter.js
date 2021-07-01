import { Component } from "react";

class HoverCounter extends Component {
  render() {
      const { count, incrementCount } = this.props;
    return (
      <>
        <h1>Hover Counter Value Is: {count}</h1>
        <button onMouseOver={incrementCount}>Hover Counter</button>
      </>
    );
  }
}

export default HoverCounter;
