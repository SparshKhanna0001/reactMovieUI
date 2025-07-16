import './App.css'
import MovieCard from '../components/movieUI.jsx'
import {Route, Routes, Link} from 'react-router-dom'
import { useState} from 'react'

const movies = [
    <MovieCard movie={{title:'John Wick', 'release': 1999}}/>,
    <MovieCard movie={{title:'John Wick', release: 1999}}/>,
    <MovieCard movie={{title:'John Wick', release: 1999}}/>,
]


function App() {

  const [searchInput, toSearchInput] = useState("");

  return (
    <>
    
    <nav>
      <Routes>
        <Route Link to '.' > Home </Route>
        <Route Link to '../pages/favourites.jsx'>Favourites </Routes>   */
        <Route type="path" element="{$MovieCard}" />
      </Routes>

    </nav>
    
    <form>
      <input
        className='input-txt'
        value= (e)=> {e.target.value}
        placeholder='enter movie name'

      />

      <button type='Submit'>Submit</button>
    </form>

    {
      movies.map(<MovieCard movie={{$movie}} />);
    }
    </>
  )
}

export default App
