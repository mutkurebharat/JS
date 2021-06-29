import { Component } from "react";

const HigherOrderComponent = (OrignalComponent, value) => {

    class NewComponent extends Component {
      constructor() {
        super();

        this.state = {
          count: 0,
        };
      }

      increment = () => {
        this.setState({
          count: this.state.count + value
        });
      };
      render() {
        return <OrignalComponent count={this.state.count} incrementCount={this.increment} {...this.props}/>;
      }
    }
    return NewComponent;
}

export default HigherOrderComponent;