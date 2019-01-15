import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the client!</h1>
        <Header></Header>
      </div>
    );
  }
}

export default App;
