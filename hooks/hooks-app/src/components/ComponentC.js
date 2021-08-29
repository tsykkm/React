import React, { useContext } from 'react'
import { CountContext } from '../App';

function ComponentC() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <button onClick={() => countContext.countDispatch({type:'incriment1', value: 1})}>+ボタン1</button>
            <button onClick={() => countContext.countDispatch({type:'decriment1', value: 1})}>-ボタン1</button>
            <button onClick={() => countContext.countDispatch({type:'reset'})}>resetボタン</button>
        </div>
    )
}

export default ComponentC
