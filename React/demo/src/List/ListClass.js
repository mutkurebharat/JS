import { Component } from "react";

class ListClass extends Component {
    person = ["a", "b", "c", "d", "g", "v", "r"];

    render() {
        let ele = this.person.map((value) => {
          return <h4 key={value}>{value}</h4>;
        });
        return(
            <div>
                {/* {this.person.map((value) => {
                    return (<h4>{value}</h4>)
                })} */}
                {ele}
            </div>
        )
    }
}

export default ListClass;