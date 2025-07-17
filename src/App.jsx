import './styles/App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Favourites from './pages/favourites';
import NavBar from './components/NavBar';
import By10  from './components/by10';

function App() {
  return (
  <div>
    <NavBar />
    
    <main className='main-content'>
    <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/'element={<Home/>} />
        <Route path='/favourite' element={<Favourites/>} />
        <Route path='/10' element={<By10 />} />
    </Routes>
    </main>
  </div>
  );

}

export default App
