import { Component } from "react";

class Ternarry extends Component {
    constructor() {
        super()
        
        this.state = {
            isGraduated: false
        }
    }

    render() {

        let msg

        this.state.isGraduated ? msg = "Elligible" : msg = "Not Elligible"

        return(
            <h1>{msg}</h1>
        )
        // return this.state.isGraduated ? (
        //   <h1>Elligible</h1>
        // ) : (
        //   <h1>Not Elligible</h1>
        // );
    }
}

export default Ternarry;