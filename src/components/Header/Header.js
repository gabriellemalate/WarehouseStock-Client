import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logos/InStock-Logo_1x.png';
import './Header.scss';

function Header () {
    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt="InStock Logo"/>
            </Link>

            <nav className="nav">
                <NavLink to='/'>Warehouses</NavLink>
                <NavLink to='/inventory'>Inventory</NavLink>
            </nav>
        </header>
    )
}

export default Header;