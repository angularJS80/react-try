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
    state = {
        movies:movies

    };


  /*  shouldComponentUpdate(){

        // check new prop | old prop
    }*/

    componentWillUpdate(){
        // use spinner start
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")

    }

    componentWillReceiveProps(){

    }


    componentDidMount(){
        // can access Ui element
        console.log("componentDidMount")
        // use spinner end
        setTimeout(()=>{

            //this.state.greeting = "Hi" // can't use this line show ur console alert
            movies.push( {
                title:"TrainsPotting"
                ,poster:"https://f4.bcbits.com/img/a2045320818_16.jpg"
            });


           this.setState({
              /* movies:[
                  ...this.state.movies,
                  {
                      title:"TrainsPotting"
                      ,poster:"https://f4.bcbits.com/img/a2045320818_16.jpg"
                  }
              ]*/
               movies:movies
            });

        },4000)
    }
    componentWillMount(){
        console.log("componentWillMount")
    }


    render() {
        console.log("render")
    return (
      <div className="App">

          {
              this.state.movies.map((movie,index)=>{

                 return  <Move title={movie.title} poster={movie.poster} key={index} />
              })
          }


      </div>
    );
  }
}

export default App;
