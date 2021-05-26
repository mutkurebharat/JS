import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Bharat",
      addr: "ASDFG",
    };
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

  render() {
    alert("Something");
    return (
      <div id="heading" className="head">
        {/* <h1>{this.props.value}</h1> */}
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}>Chnage Name</button>
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
