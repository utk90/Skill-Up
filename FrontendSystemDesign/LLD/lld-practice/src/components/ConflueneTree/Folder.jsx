import React, { useState } from 'react'
import Files from './Files'
import './styles.css'

const Folder = ({ data }) => {
    const [selectedIds, setSelectedIDs] = useState(data.map(item => item.id));

    const handleCollapse = (id) => {
        console.log('id', id);
        setSelectedIDs((prev) => prev.includes(id) ? prev.filter(prevId => prevId !== id) : [...prev, id]);
    }

    return (
        <div>
            {data.map((item, idx) => {
                return (
                    <div className={'folder-container'} key={item.id + "_" + idx}>
                        <Files id={item.id} label={item.label} link={item.link} isFolder={!!item.children} handler={handleCollapse} isFolderOpen={!!item.children} />
                        {item.children && <div className={selectedIds.includes(item.id) ? 'folder-open' : 'folder-close'}><Folder data={item.children} /></div>}
                    </div>
                )
            })}
        </div>
    )
}

export default Folder