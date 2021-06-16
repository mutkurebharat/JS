import React, { Component } from "react";
import TableData from "./TableDate";

class Fragment extends Component {
  render() {
    return (
      //   <React.Fragment>
      //     <h1>Fragment</h1>
      //     <h1>Other Fragement</h1>
      //   </React.Fragment>

      <table>
        <thead>
          <tr>
            <TableData />
          </tr>
        </thead>
      </table>
    );
  }
}

export default Fragment;
