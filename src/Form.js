import React, {useState, useEffect} from 'react'
import MovieInfo from './MovieInfo'
import MovieList from './MovieList'

const Form = () => {
    const [query, setQuery] = useState('titanic')
    const [searh, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [info, setInfo] = useState({})

    useEffect(() => {
        getMovies()
    }, [query])

    useEffect(() => {
        openMovie()
    }, [])

    const getMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=e4db3ced&s=${query}`)
    const data = await response.json()
    setMovies(data.Search)
    console.log(data.Search)
  } 
  console.log(movies)
  
      const urlInfo = `https://www.omdbapi.com/?apikey=e4db3ced&i=`
      const openMovie = async (id) => {
        const response = await fetch(urlInfo + id)
        const data = await response.json()
        console.log(data)
        setInfo(data)
        setMovies([])
      }
    console.log(info)
    

    const updateSearch = e => {
    setSearch(e.target.value)
  }
    const getSearch = (e) =>{
      e.preventDefault()
      setQuery(searh)
      // reset input 
      setSearch('')
  }
    const closeInfo = () => {
      setInfo({})
      //back to movies list to invoke again
      getMovies()
    }
  
    return (
        <div>
             <form  onSubmit={getSearch} className="mb-5">
                <input className="form-control" type="text" value={searh} onChange={updateSearch}/>
                <button className="form-control" type="submit">Search</button>
            </form>
            <div className="row">
                  { (typeof movies != null) ? movies.map(movie => (
                    <MovieList
                    
                    key = {movie.imdbID}
                    title = {movie.Title}
                    year = {movie.Year}
                    image = {movie.Poster}
                    open = {()=> openMovie(movie.imdbID)}
                    />
                  )) : <div> Nera filmo</div>}
                  
              {(typeof info.Title != "undefined")? <MovieInfo key={info.imdbID} info = {info} closeInfo = {closeInfo}/> : 'belekas'} 
              </div>
                            
        </div>
    )
}
export default Form
