import React from 'react'
import { useFetchAPI } from '../AllHooks';

function Contact() {
    const { data } = useFetchAPI('https://jsonplaceholder.typicode.com/comments');

    return (
        <>
            <h1>Contact</h1>
            {data && data.slice(0, 10).map(item => <div key={item.id}>{item.body}</div>)}
        </>
    )
}

export default Contact