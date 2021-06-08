import { Component } from "react";

class Child extends Component {

    constructor(props) {
        super(props)
        console.log("props = ", props)
    }
    
  render() {
    return <button onClick={() => this.props.method('Childdddddddd')}>Click Me </button>;
  }
}

export default Child;
