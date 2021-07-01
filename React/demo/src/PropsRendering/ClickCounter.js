import { Component } from "react";

class ClickCounter extends Component {
    render() {
        // const { count, incrementCount } = this.props;
        return (
          <>
            <h1>Click Counter Value Is: {this.props.count}</h1>
            <button onClick={this.props.incrementCount}>Click Counter</button>
          </>
        );
    }
}

export default ClickCounter;