import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/search';
import axios from 'axios'
import Result from './components/Movie/result';
import CurrentMovie from './components/Movie/currentMovie';
import Header from './components/Header/header';


function App() {
  const [state, setState] = useState({
    s: '',
    response: [],
    selected: {}
  });

  const apiURL = '//www.omdbapi.com/?apikey=73f30b51'

  const searchFilm = e => {
    if(e.key === 'Enter'){
      axios(apiURL + "&s=" + state.s).then(({data}) => {
        let response = data.Search;
        setState(prevState => {
          return  {...prevState, response: []},
                  {...prevState, response: response}
        })
      })
    } 
  }

  const openCurrentMovie = id => {
    axios(apiURL + "&i=" + id).then(({data}) => {

      let response = data;
      console.log(response)
      setState(prevState => {
        return {...prevState, selected: response}
      })
    })
  }

  const closeCurrentMovie = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    })
  }

  const onInputChange = e => {
    let s = e.target.value

    setState(prevState => {
      return {...prevState, s: s}
    })
  }

  return (
    <div>
      <Header />
      <main>
        <SearchBar onInputChange={onInputChange} searchFilm={searchFilm}/>
        <Result response={state.response} openCurrentMovie={openCurrentMovie}/>
        <div className='made'>Made by Dima Kulikovskiy <span>&#169; 2020</span></div>

        {state.selected.Title != undefined ? <CurrentMovie selected={state.selected} closeCurrentMovie={closeCurrentMovie}  /> : false}
      </main>
    </div>
  );
}

export default App;
