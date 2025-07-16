
function MovieCard ( {movie} ){ 
return (

    <>
        <div className="movie-info">
        <p>{movie.title}</p>
        <p>{movie.release}</p>
        <img src={movie.url} alt={movie.title} />
        </div>
        <div className="button-overlay">
        <br/>
        <button onClick={()=>{alert(`clikcd ${movie.title}`);}}>💘</button>
        </div>
    </>
    )
}

export default MovieCard
