import React,{Component}  from 'react';

import PropTypes from 'prop-types';
import Value from './Value';
import Controll from './Controll';


const propTypes = {

}

const defaultProps = {

};

class Counter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Value>

                </Value>
                <Controll>

                </Controll>
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;
export default Counter;