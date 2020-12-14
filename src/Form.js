import React, {useState, useEffect} from 'react'
import MovieInfo from './MovieInfo'
import MovieList from './MovieList'

const Form = () => {
    const [query, setQuery] = useState('titanic')
    const [searh, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [info, setInfo] = useState({})

    useEffect(  () => {
        getMovies();
    }, [query]);

    useEffect(() => {
        openMovie();
    }, []);

    const getMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=e4db3ced&s=${query}`);
    const data = await response.json();
    setMovies(data.Search)
    console.log(data.Search)
    console.log(movies) 
  }
  console.log('Cia idomu', movies.Title)

      const urlInfo = `https://www.omdbapi.com/?apikey=e4db3ced&i=`;
      const openMovie = async (id) => {
        const response = await fetch(urlInfo + id);
        const data = await response.json();
        console.log(data);
        setInfo(data)
        setMovies([])
    }
    console.log(info)
    

    const updateSearch = e => {
    setSearch(e.target.value);
  }
    const getSearch = (e) =>{
      e.preventDefault()
      setQuery(searh)
      setSearch('')
  }
    const closeInfo = () => {
      setInfo({})
      getMovies()
    }
  
    return (
        <div>
             <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={searh} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>
                  {movies.map(movie => (
                    <MovieList
                     
                    key = {movie.imdbID}
                    title = {movie.Title}
                    year = {movie.Year}
                    image = {movie.Poster}
                    open = {()=> openMovie(movie.imdbID)}
                    />
                  ))}
                  
              {(typeof info.Title != "undefined")?<MovieInfo info = {info} closeInfo = {closeInfo}/> : false}
                            
        </div>
    )
}
export default Form
