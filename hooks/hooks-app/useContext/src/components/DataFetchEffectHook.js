import React, { useState, useEffect } from 'react';

const DataFetchEffectHook = () => {
    // 1. ローカルstateの作成
    console.log('MEEが呼ばれました')
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        const res = await fetch('https://api.randomuser.me/')
        const data = await res.json()
        const [item] = data.results

        setUser(item)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            {loading ? <h1>Loading...</h1> :
                <ul>
                    {JSON.stringify(user['location'])}
                    {Object.keys(user).map(e => <li>{e }</li>)}
                </ul>
            }
        </>
    );
}

export default DataFetchEffectHook;