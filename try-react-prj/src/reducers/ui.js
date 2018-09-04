import * as types from '../actions'
const initialState ={
    color:[255,255,255,255]
}

function ui(state = initialState ,action){
    var rtnColor = {color:""};
    if(action.type === types.SET_COLOR){
        rtnColor.color = action.color;
    }else{
        rtnColor.color = state.color;
    }
    return rtnColor;
}

export default ui