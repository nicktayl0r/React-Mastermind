import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';
import ScoreButton from './components/ScoreButton/ScoreButton';

class App extends Component {
  render() {
    return (
        <div>
          <header className="App-header">
            Welcome to React Mastermind
          </header>
          <Gameboard />
          <ColorPicker />
          <NewGameButton />
          <ScoreButton />
        </div>
    );
  }
}

export default App;
