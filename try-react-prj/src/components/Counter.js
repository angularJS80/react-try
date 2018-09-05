import React,{Component}  from 'react';

import PropTypes from 'prop-types';
import Value from './Value';
import Controll from './Controll';
import  {connect,bindActionCreators} from 'react-redux'
import * as actions from '../actions/'

const propTypes = {

}

const defaultProps = {

};

class Counter extends Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }
    render(){

        return(

            <div>
                <Value number={this.props.store.getState().counter.number}/>
                <Value number={this.props.number}/>
                <Controll onPlus={this.props.handleIncrement} store={this.props.store}/>
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

// 값들에 대하여 연결해주는 부분
const mapStateToProps = (state) => {
    return{
        number:state.counter.number,
        color:state.ui.color
    }
}
// 기능들에 대하여 연결해주는 부분
const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(anctions,dispatch);
    return{
        handleIncrement :() => {
            dispatch(actions.increament())
        },

        handleDecreament :() => {
            dispatch(actions.decreament())
        },

        handleSetColor :(color) => {
            dispatch(actions.setColor(color))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);