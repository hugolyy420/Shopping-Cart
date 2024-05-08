const Categories = ({ categories, filterProducts }) => {
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <button
            type="button"
            className="p-2 hover:bg-slate-400 w-full text-left"
            onClick={() => filterProducts(category)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
