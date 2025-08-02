import React, {useEffect, useState} from 'react'
import Search from './components/Search.jsx'
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
import {useDebounce} from "react-use";
import {updateSearchCount, getTrendingMovie} from "./appwrite.js";

// API key and url
const API_BASE_URL= "https://api.themoviedb.org/3"
const API_KEY=import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
    method: 'GET',
    headers:{
        accept:'application/json',
        authorization:`Bearer ${API_KEY}`
    }
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

    const [movieList, setMovieList] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [trendingMovies, setTrendingMovies] = useState([])

    useDebounce(()=> setDebouncedSearchTerm(searchTerm), 1000, [searchTerm])

    const fetchmovies = async (query='')=>{
        setIsLoading(true)
        setErrorMessage('')
        try {
            const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
            const response = await fetch(endpoint, API_OPTIONS)
            if (!response.ok) {
                throw new Error('Could not fetch the movie data')
            }
            const data = await response.json()
            if (data.Response===false) {
                setErrorMessage(data.Error||'failed to fetch movies')
                setMovieList([])
                return
            }
            setMovieList(data.results||[])
            if(query && data.results.length>0){
                await updateSearchCount(query, data.results[0])
            }
        }catch(error) {
            console.error(`Error fetching movies: ${error}`)
            setErrorMessage('Error fetching movies, try again')
        }finally {
            setIsLoading(false)
        }
    }

    const loadTrendingMovies = async (query='')=>{
        try{
            const movies = await getTrendingMovie()
            setTrendingMovies(movies)
        }catch (error) {
            console.error(`Error fetching trending movies: ${error}`)
        }
    }

    useEffect(() => {
        fetchmovies(debouncedSearchTerm)
    },[debouncedSearchTerm])
    useEffect(() => {
        loadTrendingMovies()
    },[])
    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="./hero.png" alt="Hero Banner" />
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy without hassle</h1>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </header>
                {trendingMovies.length > 0 && (
                    <section className="trending">
                        <h2>Trending Movies</h2>
                        <ul>
                            {trendingMovies.map((movie,index) => (
                                <li key={movie.$id}>
                                    <p>{index+1}</p>
                                    <img src={movie.poster_url==='https://image.tmdb.org/t/p/w500/null'?'/no-movie.png':movie.poster_url} alt={movie.title} />
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
                <section className="all-movies">
                    <h2>All movies</h2>
                    {isLoading ? (
                        <Spinner />
                    ): errorMessage ? (
                        <p className="text-red-500">{errorMessage}</p>
                    ): (
                        <ul>
                            {movieList.map((movie) => (
                            <MovieCard key={movie.id} movie={movie}></MovieCard>
                        ))}
                        </ul>
                    )}
                </section>
            </div>
        </main>
    )
}
export default App
