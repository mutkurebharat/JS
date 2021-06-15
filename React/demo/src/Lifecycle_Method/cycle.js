import { Component } from "react";
import LifeCycleTwo from "./cycle1";

class LifeCycleOne extends Component {
    constructor(){
        super()

        this.state = {
            name: "Something"
        }
        console.log("Constructor LifeCycle One")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps LifeCycle One")
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount LifeCycle One")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate LifeCycle One")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate  LifeCycle One")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate  LifeCycle One")
    }

    changeBtnText = () => {
        this.setState({
            name: "Text Has Been Chnaged"
        })
    }

    render() {
        console.log("Render LifeCycle One");

        return(
            <div>
                <h1>LifeCycle One</h1>
                <button onClick={this.changeBtnText}>{this.state.name}</button>
                <LifeCycleTwo />
            </div>
        )
    }
}

export default LifeCycleOne