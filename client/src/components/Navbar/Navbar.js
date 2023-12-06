import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'isActive' : null;
    }


    return (
        <nav className="navbar">
            <h1 className={isActive('/')}>
                <Link to='/'>Home</Link>
            </h1>
            <h1 className={isActive('/about')}>
                <Link to='/about'>About</Link>
            </h1>
            <h1 className={isActive('/tools')}>
                <Link to='/tools'>Tools</Link>
            </h1>
        </nav>
    )
}

export default Navbar;


