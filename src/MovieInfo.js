import React from 'react'

const MovieInfo = ({info, closeInfo}) => {
    return (
    <> 
        <div className="col">
            <h2>{info.Title} {info.Year}</h2>
            <img src={info.Poster } alt=""/>
        </div>
        <div className="col mt-5">
            <h4> Director:</h4>
            <h5> {info.Director}</h5>
            <h4> Actors: </h4>
            <h6>{info.Actors}</h6>
            <h4> Genre: </h4>
            <h6>{info.Genre}</h6>
            <h4>Ratings: </h4>
            {info.Ratings.map(ratings => <h6> {ratings.Source} {ratings.Value}</h6>)} 
            <button className="btn btn-outline-secondary form-control mt-5" onClick = {closeInfo}> Back</button>

            
        </div>
    </>
    )
}

export default MovieInfo
