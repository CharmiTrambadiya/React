import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Nav from './components/nav';
import Owl from './components/owl';
import Friend from './components/friend';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Form />
        <Nav />
        <Owl />
        <Friend />
      </div>
    );
  }
}

export default App;