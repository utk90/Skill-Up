import React, { useEffect, useState } from 'react'

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const handleFetch = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`);
            const jsonRes = await res.json();
            setData((prev) => {
                return [...prev, ...jsonRes]
            });
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log('Error while fetching resource: ', err);
        }
    }

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 10) {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        handleFetch();
    }, [page])

    return (
        <>
            <div className="posts-container">
                {data && data?.map(post => <div className='post-item'>{post.title}</div>)}
            </div>
            {loading && <div>Loading...</div>}
        </>
    )
}

export default InfiniteScroll