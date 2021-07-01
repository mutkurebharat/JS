import { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
    render() {
        return(
            <ComponentB name1={this.props.name}/>
        )
    }
}

export default ComponentA;