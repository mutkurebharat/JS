import React from 'react';
import ReactDOM from 'react-dom'
import Bharat from './Component'

function App() {
    return (
      <div>
        <h2>Heading</h2>
        <p>Paragraph</p>
        <Bharat />
      </div>
    );
    
}
ReactDOM.render(<App />, document.querySelector("#root"));
