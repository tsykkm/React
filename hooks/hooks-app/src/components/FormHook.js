import React, { useState } from 'react';

const FormHook = () => {
    // 1. ローカルstateの作成
    const [name, setName] = useState({firstName: '', lastName: ''});

    return(
        <>
            <p>{name.firstName}</p>
            <p>{name.lastName}</p>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    // 2. オブジェクトを展開した後に値を変更する
                    onChange={e => setName({...name, firstName: e.target.value})}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({...name, lastName: e.target.value})}
                />
            </form>
        </>
    );
}

export default FormHook;