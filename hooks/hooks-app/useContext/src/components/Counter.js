import React, { useState } from 'react';

const Counter = () => {
    // 1. ローカルstateの作成
    const [cnt, setCnt] = useState(0);

    return(
        <>
            <p>{cnt}</p>
            <button onClick={() => setCnt(cnt + 1)}>ボタン</button>
        </>
    );
}

export default Counter;