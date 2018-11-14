import React, { Component } from 'react';
import './App.css'
import Header from '../navigation/Header';
import Waste from './WasteBody'
import ExampleTemplate from './exampleATemplate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
             {/* <Waste /> */}
             <ExampleTemplate />
        </header>
      </div>
    );
  }
}

export default App;
