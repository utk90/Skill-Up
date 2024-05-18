import React from 'react'
import './styles.css'

const Files = ({ id, label, link, handler, isFolder, isFolderOpen }) => {
    const fileJsx = isFolder ? <span>{label}</span> : <a href={link}>{label}</a>;
    return (
        <div>
            {isFolder ? <h3 style={{ display: 'inline' }}>{'>'}</h3> : <h2 style={{ display: 'inline' }}> . </h2>}
            <span id={id} onClick={isFolder ? () => handler(id) : () => { }}>{fileJsx}</span>
        </div>
    )
}

export default Files