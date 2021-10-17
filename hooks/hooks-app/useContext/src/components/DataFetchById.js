import React, { useState, useEffect } from 'react';

const DataFetchById = () => {
    const [post, setPost] = useState(null);
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        setLoading(true)

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const item = await res.json()

        setPost(item)
        setLoading(false)
    }

    // 初回render時とid変更時にfetch
    useEffect(() => {
        fetchData()
    }, [id])

    return(
        <>
            <input
                type="text"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            {loading ? <h1>loading...</h1> : <h1>{post.title}</h1>}
        </>
    );
}

export default DataFetchById;