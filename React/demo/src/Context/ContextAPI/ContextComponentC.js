import { Component } from "react";
import { ContextApiConsumer } from "./Context";

class ContextComponentC extends Component {
  render() {
    return (
      <ContextApiConsumer>
        {(data) => {
            // console.log("data === ", data)
          return (
            <>
              <h1>City: {data.city}</h1>
              <h1>Gender: {data.gender}</h1>
              <h1>Name: {data.name}</h1>
              <h1>Role: {data.role}</h1>
            </>
          );
        }}
      </ContextApiConsumer>
    );
  }
}

export default ContextComponentC;
