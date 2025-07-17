const API_KEY = '6804bb7d5c389f7c4f2959504b8ad55e';
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results ;
}

export const getSearchResults = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`) ;
    const data = await response.json();
    return data.results ;
}
