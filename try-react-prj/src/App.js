import React, { Component } from 'react';

import './App.css';
import Move from './Move';



const movies =[
    { title : "metrix"
        ,poster:"https://f4.bcbits.com/img/a2045320818_16.jpg"
    },
    { title : "full matal jaker"
        ,poster:"https://f4.bcbits.com/img/a2045320818_16.jpg"
    },
    { title : "Old Boy"
        ,poster:"https://f4.bcbits.com/img/a2045320818_16.jpg"
    },
    { title : "Star Wars"
        ,poster:"https://f4.bcbits.com/img/a2045320818_16.jpg"
    },
]


class App extends Component {
  render() {
    return (
      <div className="App">
          {
              movies.map((movie,index)=>{

                 return  <Move title={movie.title} poster={movie.poster} key={index} />
              })
          }


      </div>
    );
  }
}

export default App;
