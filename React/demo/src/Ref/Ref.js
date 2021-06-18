import React, { Component } from "react";

class Ref extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();

    this.state = {
      val: ""
    };
  }

  componentDidMount() {
    //   console.log("Ref = ", this.inputRef);
    //   this.inputRef.current.focus();
      // document.getElementById("abc").focus();
  }

  handleFocus = () => {
    //   this.forceUpdate()
    this.inputRef.current.focus();
    console.log("Val = ", this.inputRef.current.value);
    this.setState({
      val: this.inputRef.current.value
    });

  };


  render() {
    // let head;

    // if(this.inputRef.current){
    //     head = <h4>{this.inputRef.current.value}</h4>;
    // } else {
    //     head = <h4>ABC</h4>
    // }
    return (
      <>
        <label>Name</label>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleFocus}>Click here to get Focus</button>
        <h4>{this.state.val}</h4>
      </>
    );
  }
}

export default Ref;