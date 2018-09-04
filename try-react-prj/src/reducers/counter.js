import * as types from '../actions'

const initialState = {
    number:0,
    dummy:'dummy'
};


/*export function counter(state,action){
    if(typeof state ==='undefined'){
        return initialState
    }
    return state;
}*/


/*호출위치 : 디스페치 */
/*인자설명 action  : index.js 에 정의된 엑션생성자의 형태*/

export function counter(state ,action){
    var addVal = 1;
    console.log(state);

    console.log(types.INCREMENT)
    if(typeof state ==='undefined'){
        state =  initialState
    }

    switch(action.type){
        case types.DECREMENT:
            addVal = -1;
            break;
        case types.INCREMENT:
            addVal = 1;
            break;
        default:
            addVal = 0;
            break;
    }
    alert(action.type+addVal);
    //return {number: state.number + addVal;};
    console.log(state.number +addVal)
    return {...state,number: state.number + addVal};
}

export default counter