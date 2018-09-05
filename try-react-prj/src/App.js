import React, { Component } from 'react';

import './App.css';
import Move from './Move';
import MoveEdit from './MoveEdit';
import Counter from './components/Counter'

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

        
    }
    componentWillMount(){
        console.log("componentWillMount")
    }

    /*반복적인 Move 테그를 수행 하는데 Move 역시 Componet 를 상속하여 만들어진 컴포넌트로 App.js 에서 사용되도록 line4 에 import 되어있다.*/
    _renderMovies = function(){
        const movies =  this.state.movies.map((movie,index)=>{
            return  <Move title={movie.title} poster={movie.poster} key={index} />
        })
        return movies;
    }

    /*App 클래스는 Componet 상속으로 리엑트 구성 render 를 통해 표현해야 될 View 를 리턴한다 */
    render() {
        //console.log("render")
        console.log(this.props.store)
    return (
         <div className="App">
          /*_reanderMovies 를 통해 영화목록을 가져 오는 목록을 가져온다. */
          {this.state.movies? this._renderMovies():'Loading'}
          <MoveEdit/>
          <Counter store={this.props.store}/>
      </div>


    );
  }
}

export default App;
