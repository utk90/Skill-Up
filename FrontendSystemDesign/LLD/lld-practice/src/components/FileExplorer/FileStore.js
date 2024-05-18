import React, { useEffect, useState } from 'react'
import FileExplorer from './FileExplorer';

const FileStore = () => {
    const [filesData, setFilesData] = useState([]);
    const fetchFileData = async () => {
        const raw = await fetch('http://localhost:3001/data');
        const data = await raw.json();

        setFilesData(data);
    }

    useEffect(() => {
        console.log('inside useEffect')
        fetchFileData();
    }, [])


    return (
        <FileExplorer files={filesData} />
    )
}

export default FileStore