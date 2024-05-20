import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import headerIcon from './default-monochrome.svg';

export const Header = ({ cartItems }) => {
  return (
    <header className="flex justify-between items-center py-4 px-8 sticky top-0 bg-white shadow-md z-50">
      <Link to="/">
        <div className="w-32 h-16 flex items-center">
          <img src={headerIcon} alt="Home Logo" className="object-fill" />
        </div>
      </Link>
      <nav className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart" aria-label="Open Cart" className="flex items-center gap-2">
          <div>{cartItems.length}</div>
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </nav>
    </header>
  );
};
