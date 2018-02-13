import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard';
import ColorPicker from './components/ColorPicker/ColorPicker'

class App extends Component {
  render() {
    return (
        <div>
          <header className="App-header">
            Welcome to React Mastermind
          </header>
          <Gameboard />
          <ColorPicker />
        </div>
    );
  }
}

export default App;
