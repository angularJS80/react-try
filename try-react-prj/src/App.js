import React, { Component } from 'react';

import './App.css';
import Move from './Move';


const titles = ["metrix","full matal jaker","Old Boy","Star Wars"]
const posters = [
  "https://f4.bcbits.com/img/a2045320818_16.jpg",
  "https://f4.bcbits.com/img/a2045320818_16.jpg",
  "https://f4.bcbits.com/img/a2045320818_16.jpg",
  "https://f4.bcbits.com/img/a2045320818_16.jpg"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Move title={titles[0]} poster={posters[0]}/>
        <Move title={titles[1]} poster={posters[1]}/>
        <Move title={titles[2]} poster={posters[2]}/>
        <Move title={titles[3]} poster={posters[3]}/>

      </div>
    );
  }
}

export default App;
