import React from 'react'
import '../../App.css'

const SearchBar = ({onInputChange,searchFilm}) => {
    return (
        <section className="searchbox-wrap">
            <input  type='text' 
                    placeholder='Search your movie...' 
                    onChange={onInputChange}
                    className="searchbox"
                    onKeyPress={searchFilm}/>
        </section>
    )
}

export default SearchBar;