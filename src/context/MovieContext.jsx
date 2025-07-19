import { useState, useContext, useEffect, createContext} from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    
    useEffect(() => {
        const favoritesMovies = localStorage.getItem('favorites');

        if(favoritesMovies) setFavorites(JSON.parse(favoritesMovies));
    }, 
    [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    },
    
    [favorites])

    const addToFavorites = (movie) =>  {
        setFavorites(prev => [...prev, movie])
    };

    const isFavorite = (movieID) => {
        return favorites.some(movie => movie.id === movieID);
    };

    const removeFromFavorites = (movieID) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieID));
    };

    const values = {
        favorites,
        isFavorite,
        addToFavorites,
        removeFromFavorites
    }

    return <MovieContext.Provider value={values}>
        {children}
    </MovieContext.Provider>    

}
