import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logos/InStock-Logo_2x.png';
import './Header.scss';

function Header () {
    return (
        <header className='header'>
            <div className="header__container">
                <Link to='/'>
                    <img className='header__logo' src={logo} alt="InStock Logo"/>
                </Link>

                <nav className="nav">
                    <NavLink to='/warehouse' className="nav__link">Warehouses</NavLink>
                    <NavLink to='/inventory' className="nav__link">Inventory</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;