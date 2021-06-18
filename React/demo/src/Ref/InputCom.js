import React, { Component } from "react";

class InputComp extends Component {

    constructor() {
        super()
        this.inputRef = React.createRef()
    }

    focusInputElement = () => {
        this.inputRef.current.focus();
    }

    render() {
        return <input type="text" ref={this.inputRef} />;
    }
}

export default InputComp;