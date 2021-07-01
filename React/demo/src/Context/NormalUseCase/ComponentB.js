import { Component } from "react";
import ComponentC from "./ComponentC";

class ComponentB extends Component {
  render() {
    return <ComponentC name2={this.props.name1} />;
  }
}

export default ComponentB;
