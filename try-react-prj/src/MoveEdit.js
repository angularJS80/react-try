/**
 * Created by yongbeom on 2018. 8. 12..
 */
import React,{Component} from 'react';
import './Move.css';
import PropTypes from 'prop-types';



class MoveEdit extends Component{
    state = {
        movies:[]

    };
    static propTypes = {
        title : PropTypes.string,
        poster : PropTypes.string,
        //cost : PropTypes.isRequired
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this.state)

    }

    render(){
        return(
            <div>
                <h1> <button onClick={this.handleClick}>add Move</button></h1>
            </div>

        );
    };
}


export default MoveEdit ;