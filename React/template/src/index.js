import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron'
import Feature from './Feature'
import Banner from './Banner'
import Footer from './Footer'

const App = () => {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Feature />
        <Banner />
        <Footer />
      </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#root'))