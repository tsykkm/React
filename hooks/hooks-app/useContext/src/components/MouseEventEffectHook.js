import React, { useState, useEffect } from 'react';

const MouseEventEffectHook = () => {
    // 1. ローカルstateの作成
    console.log('MEEが呼ばれました')
    const [x, setX] = useState(0);
    const [y, setY] = useState('');

    // 初回のみ発火させ、更新時のrender時に発火させないようにするには第二引数に[]を指定する
    // 今回はイベントの登録は初回のみでいいはず
    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', getMousePosition)
        // returnを記述して関数を返すことでcomponentWillUnmount時の処理を追加することができる
        return () => {
            window.removeEventListener('mousemove', getMousePosition)
        }
    }, [])

    const getMousePosition = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    return(
        <>
            <ul>
                <li>X Coordinates: {x}</li>
                <li>Y Coordinates: {y}</li>
            </ul>
        </>
    );
}

export default MouseEventEffectHook;