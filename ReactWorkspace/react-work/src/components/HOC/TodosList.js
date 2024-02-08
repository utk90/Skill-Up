// import { useEffect, useState } from "react";

import Processor from "./Processor";

const TodosList = ({ data }) => {
    // const [data, setData] = useState([]);
    // const [filtered, setFiltered] = useState([]);
    // const [search, setSearch] = useState('');
    // const url = 'https://jsonplaceholder.typicode.com/todos';

    // const fetchData = (url, options = null) => {
    //     fetch(url, options)
    //         .then(raw => raw.json())
    //         .then(json => {
    //             const first10Results = json.slice(0, 10);
    //             setData(first10Results);
    //             setFiltered(first10Results);
    //         });
    // }

    // const searchHandler = (searchText) => {
    //     const filteredRes = data.filter(({ title }) => title.includes(searchText));
    //     setFiltered(filteredRes);
    // }

    // useEffect(() => {
    //     if (!data.length) {
    //         fetchData(url);
    //         console.log(data);
    //     }
    //     if (data.length) {
    //         searchHandler(search);
    //     }
    // }, [search]);

    return (
        <>
            {/* <h1>Todos List</h1>
            <input type="text" placeholder="search text" onChange={(e) => setSearch(e.target.value)} /> */}
            {data && data.map(({ title }) => <div key={title}>{title}</div>)}
        </>
    )
}

const FilteredTodo = Processor(TodosList, 'todos');

export default FilteredTodo;