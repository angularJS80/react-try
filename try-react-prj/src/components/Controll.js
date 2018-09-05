import React,{Component}  from 'react';

import PropTypes from 'prop-types';
import * as actions from '../actions/'
const propTypes = {
    onPlus : PropTypes.func,
    onMinus : PropTypes.func,
    onChangeColor :  PropTypes.func
};

const defaultProps = {
    onPlus : ()=>(console.warn("undifined onPlus")),
    onMinus : ()=>(console.warn("undifined onMinus")),
    onChangeColor :  ()=>(console.warn("undifined onChangeColor"))
}



class Controll extends Component{
    constructor(props){
        super(props)
        this.localMinus = this.localMinus.bind(this);
    }

    localMinus(){
        this.props.store.dispatch(actions.decreament())
    }

    render(){
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.localMinus} >-</button>
                <button onClick={this.props.onChangeColor}>-</button>
            </div>
        );
    }
}

Controll.propTypes = propTypes;
Controll.defaultProps = defaultProps;

export default Controll;