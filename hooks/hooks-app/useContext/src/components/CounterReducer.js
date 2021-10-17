import React, { useReducer } from 'react'

// 1. 初期値設定
const initial = {
    firstCounter: 0,
    secondCounter: 0,
};
// 2. reducer関数作成(stateにactionを渡し、新しいstateを返すように実装)
const reducer = (state, action) => {
    switch (action.type) {
        case 'incriment1':
            // 更新前のstateを展開し、objのマージを行う
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decriment1':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'incriment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decriment2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initial
        default:
            return state
    }
}

function CounterReducer() {
    // 3.作成したreducerとstateをuseReducerに渡す。userReducerはstateとdispatch関数を返すので分割代入する。
    const [count, dispatch] = useReducer(reducer, initial);
    return (
        <div>
            <div>カウント1: {count.firstCounter}</div>
            <div>カウント2: {count.secondCounter}</div>
            {/* 4. incrimentがアクションに当たる。dispatchによってactionがreducerに送られstate更新が走る */}
            <button onClick={() => dispatch({type:'incriment1', value: 1})}>+ボタン</button>
            <button onClick={() => dispatch({type:'decriment1', value: 1})}>-ボタン</button>
            <button onClick={() => dispatch({type:'incriment2', value: 10})}>+ボタン</button>
            <button onClick={() => dispatch({type:'decriment2', value: 10})}>-ボタン</button>
            <button onClick={() => dispatch({type:'reset'})}>resetボタン</button>
        </div>
    )
}

export default CounterReducer
