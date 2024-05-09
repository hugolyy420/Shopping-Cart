import Card from './Card';
import Categories from './Categories';
import { useFetch } from '../API/useFetch';
import { useEffect, useState } from 'react';

export const Shop = () => {
  const [url, setUrl] = useState('https://dummyjson.com/products?limit=0');
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products, isLoading, error } = useFetch(url);
  console.log(active);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://dummyjson.com/products/categories', { mode: 'cors' });
      const categories = await response.json();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const filterProducts = (category) => {
    const temp = products.filter((product) => product.category === category);
    setFilteredProducts(temp);
  };

  const clearCategory = () => {
    setActive();
    setFilteredProducts([]);
  };

  return (
    <>
      <h2 className="text-4xl mb-6">Shop</h2>
      <section className="max-w-screen-lg w-full flex">
        {isLoading && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {!isLoading && (
          <>
            <div className="w-full max-w-56">
              <h3 className="text-2xl mb-2">Category</h3>
              {active !== undefined && (
                <button
                  className="p-2 my-2 hover:bg-red-400 w-full text-left"
                  type="button"
                  onClick={clearCategory}>
                  Clear Category
                </button>
              )}
              <Categories
                categories={categories}
                filterProducts={filterProducts}
                active={active}
                setActive={setActive}
              />
            </div>
            <div>
              <label htmlFor="sorting">
                Sort By:
                <select name="sorting" id="sotring">
                  <option value="recommended">Recommended</option>
                  <option value="recommended">Alphabetical: A-Z</option>
                  <option value="recommended">Alphabetical: Z-A</option>
                  <option value="recommended">Price: Low to High</option>
                  <option value="recommended">Price: High to Low</option>
                </select>
              </label>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
                {(filteredProducts.length > 0 ? filteredProducts : products)?.map((card) => (
                  <Card key={card.id} {...card} />
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};
