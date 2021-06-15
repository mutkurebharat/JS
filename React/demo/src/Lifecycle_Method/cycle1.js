import { Component } from "react";

class LifeCycleTwo extends Component {
    constructor(){
        super()

        this.state = {
            name: "Something"
        }
        console.log("Constructor LifeCycle Twoooooo")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps LifeCycle Twoooooo")
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount LifeCycle Twoooooo")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate LifeCycle Twoooooo")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate  LifeCycle Twoooooo");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate  LifeCycle Twoooooo")
    }

    render() {
        console.log("Render LifeCycle Twoooooo");

        return(
            <h1>LifeCycle Two</h1>
        )
    }
}

export default LifeCycleTwo;