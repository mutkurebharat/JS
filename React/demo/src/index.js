import React from 'react';
import ReactDOM from 'react-dom'
import Bharat from './Component'
import ButtonComponent from "./ButtonComponent"
import "./index.css"

function App() {
    return (
      <div>
        <h2 style={{ backgroundColor: "red", color: "green" }}>Heading</h2>
        <p className="para">Paragraph</p>
        <Bharat />
        <br />
        <ButtonComponent title="Activate" />
        <br />
        <br />
        <br />
        <ButtonComponent title="Deactivate" />
      </div>
    );
    
}
ReactDOM.render(<App />, document.querySelector("#root"));
