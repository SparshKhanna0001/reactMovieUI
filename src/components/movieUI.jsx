import '../styles/MovieCard.css'

function MovieCard ( {movie } ){ 
return (

    //<className="movie-card">
    <div className="movie-card">
        <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='movie-poster-img'/>

            <div className="movie-overlay">
            <br/>
            <button className='favorite-btn' >💘</button>
            </div>

        </div>

        <div className="movie-info">
        <h3 className="movie-info-h3">{movie.title }</h3>
        <p className='movie-info-p'>{movie.release_date.split("-")[0]}</p>
        </div>

    </div>
    )
}

export default MovieCard
