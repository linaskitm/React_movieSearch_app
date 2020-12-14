import React from 'react'

const MovieInfo = ({info, closeInfo}) => {
    return (
        <div>
            <h1>{info.Title}</h1>
            <button onClick = {closeInfo}> Back</button>
        </div>
    )
}

export default MovieInfo
