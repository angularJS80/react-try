export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';
/*액션생성자 함수들 */

export function increament(){

    return{
        type:INCREMENT
    };
}


export function decreament(){

    return{
        type:DECREMENT
    };
}


export function setColor(color){
    return{
        type:SET_COLOR
        ,color
    };
}