import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h3 class="text-center">Task manager</h3>
          <Board />
      </div>
    );
  }
}

export default App;
