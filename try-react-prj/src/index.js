import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'; /*스토어 만들기 함수 제공*/
import reducers from './reducers' /*스토어 만들기 함수에 사용될 인자값 리듀서*/
import * as actions from './actions/index'
import {Provider} from 'react-redux'
import * as types from './actions'

console.log(types.INCREMENT);
const store = createStore(reducers); /*스토어를 만들었다*/
/*스토어가 하는일인 디스페치
*보낸다 엑션을 리듀서에게 보낸다
* 스토어는 현재 자신의 상태와 방금전달받은 액션을 전달한다.
* 전달받은 리듀서가 어떤변화가 필요한지 알아보고 변화를 주고 새상태를 갈아 끼운다.
*
* getState 는 현상태 반환
* subscribe 는 상태가 바뀔때 마다 실행할 리스너콜뱅 함수를 등
* */

/*현재상태 출력*/
console.log(store.getState())

/*스토어바 바뀔때 마다 로그 출력*/
const unsubscribe = store.subscribe(
    ()=>{
        console.log("stst")
        console.log(store.getState())
    }
)
store.dispatch(actions.increament())
store.dispatch(actions.setColor([255,222,222,222]))
console.log(store.dispatch(actions.increament()));



ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


unsubscribe();