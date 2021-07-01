import { Component } from "react";

class CommonComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
      return <>{this.props.abc(this.state.count, this.changeCount)}</>;
  }
}

export default CommonComponent;