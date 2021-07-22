import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    };
  }

  componentDidMount() {
      console.log("FIRST TIME");
      document.title = `Counter value is ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevState.count === this.state.count){
        
      } else {
          console.log("UPDATING");
          document.title = `Counter value is ${this.state.count}`;
      }
  }

  incrementCounter = () => {
      this.setState({
          count: this.state.count + 1
      })
  }

  changeHandler = (e) => {
      this.setState({
          name: e.target.value
      })
  }
  render() {
    return (
      <>
        <input type="text" value={this.state.name} onChange={this.changeHandler} />
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </>
    );
  }
}

export default ClassCounter;