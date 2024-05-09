const Categories = ({ categories, filterProducts, active, setActive }) => {
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <button
            type="button"
            className={`p-2 hover:bg-slate-400 w-full text-left ${active === index ? 'bg-slate-400' : ''}`}
            onClick={() => {
              filterProducts(category);
              setActive(index);
            }}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
