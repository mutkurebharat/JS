import { Component } from "react";
import ContextComponentC from "./ContextComponentC";

class ContextComponentB extends Component {
  render() {
    return <ContextComponentC />;
  }
}

export default ContextComponentB;