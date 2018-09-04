/*리듀서가 두개 이상일때 인덱스로 합쳐줘야 한다 */
import {combineReducers} from 'redux'; /*합치기 기능 제공 함수*/

import counter from './counter'; /*합칠대상 1*/
import ui from './ui';/*합칠대상 2*/

const reducers = combineReducers(
    {
        counter,ui
    }
)

export default reducers

/* 리듀서를 이용해서 스토어를 만들고 컴포넌트에 연결 할것이다 */