import { Link } from 'react-router-dom';

const Categories = ({ categories, active, setActive, setItemOffset }) => {
  return (
    <ul className="grid grid-cols-3 md:grid-cols-1 gap-4">
      {categories.map((category, index) => (
        <li key={index}>
          <Link
            to={`/shop/${category}`}
            className={`p-2 hover:bg-slate-400 block text-left ${active === category ? 'bg-slate-400' : ''}`}
            onClick={() => {
              setActive(category);
              setItemOffset(0);
            }}>
            {category}
          </Link>
          {/* <button
            type="button"
            className={`p-2 hover:bg-slate-400 w-full text-left ${active === index ? 'bg-slate-400' : ''}`}
            onClick={() => {
              setCategory(category);
              setActive(index);
              setItemOffset(0);
            }}>
            {category}
          </button> */}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
