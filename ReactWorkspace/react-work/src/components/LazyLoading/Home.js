import React from 'react'
import { useFetchAPI } from '../AllHooks'

const Home = () => {
    const { data } = useFetchAPI('https://jsonplaceholder.typicode.com/posts');

    return (
        <>
            <h1>Home</h1>
            <img src='https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_640.jpg' alt='squirrel'></img>
            {data && data.slice(0, 10).map(item => <div key={item.id}>{item.title}</div>)}
        </>
    )
}

export default Home