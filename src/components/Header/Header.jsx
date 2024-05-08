import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
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
      </nav>
    </header>
  );
};
