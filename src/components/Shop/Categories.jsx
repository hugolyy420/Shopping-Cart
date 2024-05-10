import { Link } from 'react-router-dom';

const Categories = ({
  categories,
  setCurrentCategory,
  active,
  setActive,
  setItemOffset,
  sortType
}) => {
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <Link
            to={`/shop/${category}`}
            state={{ sortType: sortType, active: active }}
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
