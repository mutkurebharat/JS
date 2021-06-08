import { Component } from "react";

class ShortCircuit extends Component {
  constructor() {
    super();

    this.state = {
      isGraduated: false
    };
  }

  render() {
    return(
        this.state.isGraduated && <h1>Finally Graduated</h1>
    )
  }
}

export default ShortCircuit;
