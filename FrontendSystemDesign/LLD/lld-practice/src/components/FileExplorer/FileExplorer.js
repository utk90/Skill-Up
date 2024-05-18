import React from 'react'
import File from './File'
import './styles.css'

const FileExplorer = ({ files }) => {
    return (
        <div className='files-container'>
            {files.map((file, idx) => {
                return (
                    <div key={file.name + '-' + idx}>
                        <File type={file.type} name={file.name} />
                        {file.files && <FileExplorer files={file.files} />}
                    </div>
                )
            })}
        </div>
    )
}

export default FileExplorer