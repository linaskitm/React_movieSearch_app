import React from 'react'

const MovieList = ({title, year, image, open}) => {
   
    return (
        <div >
            <h1>{title}</h1>
            <h2>{year}</h2>
            <img src={image} alt=''/>
            <button onClick = {open} >Placiau</button>
        </div>
    )
    
}

export default MovieList
