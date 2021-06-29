import { Component } from "react";
import HigherOrderComponent from './HigherOrderComp'

class HoverCount extends Component {
  render() {
    console.log("HOC HoverCounter", this.props);
    return (
      <>
        <h1>Hover Count value is {this.props.count}</h1>
        <button onMouseOver={this.props.incrementCount}>Hover on Me</button>
      </>
    );
  }
}

export default HigherOrderComponent(HoverCount, 5);