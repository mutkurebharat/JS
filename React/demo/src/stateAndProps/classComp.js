import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Bharat",
      addr: "ASDFG",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  changeName = () => {
    //   this.state.name = "ABCDEF";  You

    this.setState(
      {
        name: "ABCDEFGH",
      },
      () => console.log("CallBack Changed value = ", this.state)
    );

    console.log("Normal Changed value = ", this.state);
  };
  
  clickHandler = () => {
      this.setState({
        name: "ABCDEFGH"
      })
  }

  render() {
    return (
      <div id="heading" className="head">
        {/* <h1>{this.props.value}</h1> */}
        <h1>{this.state.name}</h1>
        {/* <button onClick={() => this.changeName()}>Chnage Name</button> */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me Class Component</button> */}
        {/* <button onClick={() => this.clickHandler()}>
          Click Me Class Component
        </button> */}
        <button onClick={this.clickHandler}>
          Click Me Class Component
        </button>
      </div>

      //   React.createElement(
      //     "div",
      //     { id: "heading", className: "head" },
      //     React.createElement("h1", null, "Something")
      //   )
    );
  }
}

export default ClassComponent;
