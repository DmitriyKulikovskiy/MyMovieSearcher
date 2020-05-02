import React from 'react'
import '../../App.css'


const Movie = ({result,openCurrentMovie}) => {
    return(
        <div className="result" onClick={() => openCurrentMovie(result.imdbID)}>
            <img  src={result.Poster} /> 
            <h3>{result.Title} <span>{result.Year}</span></h3> 
        </div>
        
    )
}

export default Movie;