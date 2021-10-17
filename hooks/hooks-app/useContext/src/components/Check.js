import React, { useState, useMemo } from 'react'


function Check() {
    const [countOne, setCountOne] = useState(0);
    const [countTwe, setCountTwe] = useState(0);

    const incrementOne = () => {
        setCountOne(countOne + 1);
    }

    const incrementTwe = () => {
        setCountTwe(countTwe + 2);
    }

    // useMemoに関数を代入し、第二引数に依存配列を渡す
    // useMemoが返す変数が代入される
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 200000000 ) i++;
        return countOne % 2 === 0
    }, [countOne])

    return (
        <div>
            <h2>カウント1: {isEven ? '偶数' : '奇数'}</h2>
            <button onClick={incrementOne}>カウント1 - {countOne}</button>
            <button onClick={incrementTwe}>カウント2 - {countTwe}</button>
        </div>
    )
}

export default Check