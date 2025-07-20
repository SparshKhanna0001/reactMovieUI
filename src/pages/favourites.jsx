import '../styles/Favorites.css'
import {useMovieContext} from '../context/MovieContext'
import MovieCard from '../components/movieUI';
import { Link } from 'react-router-dom';

function Favourites() {

    const {favorites} = useMovieContext();
    if(!favorites.length === 0){
    return (
        <div className='favorites'>        
        <h2 className='favorites-h2'>Favorties</h2>
        <div className="movies-grid">
                {
                favorites.map(movie =>
                <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>

    )}
    else{
    return (
        <div className='favorites-empty'>
            <h2 className='favorites-h2'>No Favorites </h2>
            <p className='favorites-empty-p'>Add favourites by clicking on the heart icon on each moviecard from <Link to="/"> home </Link> page.</p>
        </div>

    );}

}

export default Favourites