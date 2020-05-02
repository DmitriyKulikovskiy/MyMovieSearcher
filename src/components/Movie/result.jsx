import React from 'react'
import Movie from './movie'
import '../../App.css'

const Result = ({response,openCurrentMovie}) => {
    if (!response) return <div className='movieError'>Movie is not found</div>
    return(
        <div className="results">
            {response.map(result => (
            <Movie key={result.imdbID} result={result} openCurrentMovie={openCurrentMovie}/>
            ))}
        </div>
    )
}

export default Result;