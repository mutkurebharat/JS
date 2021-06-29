import { Component } from "react"
import HigherOrderComponent from "./HigherOrderComp";

class ClickCounter extends Component {
  render() {
    console.log("Check", this.props)
    return (
      <>
        <h1>Click Counter value is {this.props.count} </h1>
        <button onClick={this.props.incrementCount}>Click Me</button>
      </>
    );
  }
}

export default HigherOrderComponent(ClickCounter, 1);