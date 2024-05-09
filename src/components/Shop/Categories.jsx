const Categories = ({ categories, setCategory, active, setActive }) => {
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <button
            type="button"
            className={`p-2 hover:bg-slate-400 w-full text-left ${active === index ? 'bg-slate-400' : ''}`}
            onClick={() => {
              setCategory(category);
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
