import React from 'react'

const MovieList = ({title, year, image, open}) => {
   
    return (
        <div className = "col resize mb-3" onClick = {open}>
            <h3>{title}</h3>
            <h5>{year}</h5>
            <img src={image} alt=''/>
        </div>
    )
    
}

export default MovieList
