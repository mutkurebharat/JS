import { Component } from "react";

class Condition extends Component {
    constructor() {
        super()

        this.state = {
            status: true
        }
    }

    render() {

        let tag;

        if(this.state.status) {
            tag = "Verified";
        } else {
            tag = "Not Verified";
        }

        return(
            <h1>{tag}</h1>
        )
        // if(this.state.status){
        //     return(
        //         <h1>Verified</h1>
        //     )
        // } else {
        //     return <h1> Not Verified</h1>;
        // }
    }
}

export default Condition;