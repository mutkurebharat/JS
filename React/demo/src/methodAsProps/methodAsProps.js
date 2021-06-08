import React, { Component } from 'react';
import Child from './Child'

class Parent extends Component {

    parentMethod = (param) => {
        param()
        alert(`I am from Parent ${param}`);
    }

    render() {
        return(
            <Child method={this.parentMethod} />
        );
    }
}

export default Parent;