import React, { useState, useEffect } from 'react';

const EffectHook = () => {
    // 1. ローカルstateの作成
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // countが処理された時のみ実行(countがなければ全てのrender時に発火する)
    useEffect(() => {
        document.title = `${count}回`;
        // console.log('render')
    },[count])

    return(
        <>
            <p>・Hooks Sample</p>
            <p>クリック数{count}回</p>
            <button onClick={() => setCount(count + 1)}>カウント</button>
            <p>名前：{name}</p>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </>
    );
}

export default EffectHook;