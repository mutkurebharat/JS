import React, { Component } from "react";
import InputComp from './InputCom'

class InputContComp extends Component {
  constructor() {
    super();
    this.parentRef = React.createRef();
  }

  handleFocus = () => {
      this.parentRef.current.focusInputElement()
      alert(this.parentRef.current.inputRef.current.value);
  }

  render() {
    return (
      <>
        <InputComp ref={this.parentRef} />
        <button onClick={this.handleFocus}>Click to get Focus</button>
      </>
    );
  }
}

export default InputContComp;