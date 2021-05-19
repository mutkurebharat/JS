import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'

const App = () => {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#root'))