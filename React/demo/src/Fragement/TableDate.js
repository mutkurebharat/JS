import React, { Component } from "react";

class TableData extends Component {

    arr = [1,2,3,4,5,6,7,8,10,10]
  render() {
    return (
      //   <React.Fragment>
      <>
        {/* <td>One</td>
        <td>Two</td>
        <td>Three</td>
        <td>Four</td>
        <td>Five</td> */}
        {
            this.arr.map((ele,index) => {
                return <td key={index}>{ele}</td>;
            })
        }

      </>
      //   </React.Fragment>
    );
  }
}

export default TableData;
