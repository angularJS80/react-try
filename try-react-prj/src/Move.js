/**
 * Created by yongbeom on 2018. 8. 12..
 */
import React,{Component} from 'react';
import './Move.css';


class MovePoster extends Component{

    render(){
        console.log(this.props);
        return(<img src={this.props.poster}/>);
    }
}


class Move extends Component{

    render(){

        return(
            <div>
                <h1> {this.props.title}</h1>
                <MovePoster poster={this.props.poster}/>
            </div>

        );
    };
}


export default Move ;