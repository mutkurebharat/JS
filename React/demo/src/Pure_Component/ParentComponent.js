import { Component } from "react";
import PureComponnet from "./PureComponent";
import RegularComponent from "./RegularComponnet";
import Memo from './Memo'

class ParentComponent extends Component {
    constructor() {
        super();

        this.state = {
            name: "ABC"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
              name: "ABC"
            });
        }, 2000);
    }

    render() {
        console.log("Render -------- Parent Component")
        return (
          <>
            {/* <PureComponnet /> */}
            <RegularComponent />
            <Memo />
          </>
        );
    }
}

export default ParentComponent;