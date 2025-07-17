import { useState, useEffect} from "react";
import MovieCard from '../components/movieUI'
import '../styles/Home.css'
import {getPopularMovies, getSearchResults} from '../services/api.js'


function Home() {
    
    const [searchQuery, setSearchValue] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleSearch = async (e) => {
        e.preventDefault()

        if(!searchQuery.trim()) return
        if(loading) return
        
        setLoading(true)

        try{

            const searchResults = await getSearchResults(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    
    };

    useEffect( () => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch(err){
                setError(err)
                console.log("Error occured \n failed to load...");
            }finally{
                setLoading(false);
            }
        }
        loadPopularMovies()   
    },    [])

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input className="search-input"
                placeholder = "Search movies..."
                onChange={(e)=>{setSearchValue(e.target.value)}}
                value={searchQuery}
                >
                </input>

                <button className="search-button" type="submit">SEARCH</button>
            </form>

        {error && <div className="error-message">{error}</div>}

        { loading ? (
            <div className="loading">Loading </div>
        ) : (
            <div className="movies-grid">
                {
                movies.map(movie =>
                <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        )
    }

        
    </div>
   
    )
}

export default Home