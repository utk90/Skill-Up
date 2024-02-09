import React from 'react'
import { useFetchAPI } from '../AllHooks';

function About() {
    const { data } = useFetchAPI('https://jsonplaceholder.typicode.com/users');

    return (
        <>
            <h1>About</h1>
            <img src='https://cdn.pixabay.com/photo/2021/02/18/05/02/frog-6026117_640.png' height={300} alt='basanti'></img>
            {data && data.slice(0, 10).map(item => <div key={item.id}>{item.name}</div>)}
        </>
    )
}

export default About