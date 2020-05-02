import React from 'react'
import '../../App.css'

const CurrentMovie = ({selected, closeCurrentMovie}) => {
    return(
        <section className="popup">
			<div className="content">
				<h2 className='title'>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating"><span className='i'>Rating(IMDB):</span> {selected.imdbRating}</p>
				<p className="genre"><span className='i'>Genre:</span> {selected.Genre  }</p>
				<p className="actors"><span className='i'>Actors:</span> {selected.Actors }</p>
				<p className="Director"><span className='i'>Director:</span> {selected.Director }</p>
				<p className="language"><span className='i'>Language:</span> {selected.Language }</p>
				<p className="Awards"><span className='i'>Awards:</span> {selected.Awards }</p>
				<p className="Runtime"><span className='i'>Runtime:</span> {selected.Runtime }</p>
				<p className="BoxOffice"><span className='i'>BoxOffice:</span> {selected.BoxOffice }</p>
				
				<div className="plot">
					<img src={selected.Poster} />
					<p> <span className='i'>About:  </span> {selected.Plot}</p>
				</div>
				<button className="close" onClick={closeCurrentMovie}>Close</button>
			</div>
		</section>
        
    )
}

export default CurrentMovie;