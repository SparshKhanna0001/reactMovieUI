import {Link} from 'react-router-dom'
import Favourites from '..\src\pages\favourites.jsx'
import Home from '..\src\pages\Home.jsx'

function NavBar() {

    return <nav>
        <div className='nav-title'>
            <h5>Movie App</h5>
        </div>
        <div className='nav-links'>
            <Link to {FHome}>Home</Link>
            <Link to {Favourites}>Favourites</Link>
        </div>
    </nav>

}

export default NavBar