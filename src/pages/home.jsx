import { useState} from "react";
import MovieCard from '../components/movieUI'
import '../styles/Home.css'

function Home() {
    
    const [searchQuery, setSearchValue] = useState("")
/*    const [movies, getMovies] = useState([])
    const [loading, loadMovies] = useState(true)
    const [error, setError] = useState(null)
*/
    const handleSearch = (e) => {
        e.preventDefault()

    };

    const movies = [
        { id: 1, title: 'John Wick', release: 2014, url: 'https://m.media-amazon.com/images/I/81w+3k4U5PL._AC_SY679_.jpg' },
        { id: 2, title: 'Inception', release: 2010, url: 'https://m.media-amazon.com/images/I/51s+z1p1QGL._AC_.jpg' },
        { id: 3, title: 'The Matrix', release: 1999, url: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg' },
        { id: 4, title: 'Interstellar', release: 2014, url: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg' },
        { id: 5, title: 'Parasite', release: 2019, url: 'https://m.media-amazon.com/images/I/91n6K9XK6-L._AC_SY679_.jpg' },
    ];

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



        <div className="movie-grid">
        {
            movies.map(movie => (
              movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id} movie={movie} />
            ))
        }
        </div>

        </div> 
   )

}


export default Home