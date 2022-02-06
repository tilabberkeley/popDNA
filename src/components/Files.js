import React from 'react'

const Files = (props) => {
    return (
        <div>
            <h1>New DNA Files from API</h1>
            {props.files.map((file) => {
                return <div key={file.id}>
                    <h2>{file.name}</h2>
                    </div>
            })}
        </div>
    )
}

export default Files
