import { Component } from "react";
import ContextComponentB from "./ContextComponentB";
// import { ContextApiProvider } from "./Context";

class ContextComponentA extends Component {
    render() {
        return (
        //   <ContextApiProvider value={this.obj}>
            <ContextComponentB />
        //   </ContextApiProvider>
        );
    }
}

export default ContextComponentA;
