import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Header = ({ cartItems }) => {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <Link to="/">
        <div className="w-32 h-16 flex items-center">
          <img src="../../public/default-monochrome.svg" alt="Home Logo" className="object-fill" />
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
