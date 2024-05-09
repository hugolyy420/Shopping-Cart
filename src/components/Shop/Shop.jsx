import Card from './Card';
import Categories from './Categories';
import { useFetch } from '../API/useFetch';
import { useEffect, useState } from 'react';

export const Shop = () => {
  const [url, setUrl] = useState('https://dummyjson.com/products?limit=0');
  const { products, isLoading, error } = useFetch(url);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [active, setActive] = useState();
  const [sortType, setSoryType] = useState('rating');

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://dummyjson.com/products/categories', { mode: 'cors' });
      const categories = await response.json();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const sortFunctions = {
      rating: (products) => products.sort((a, b) => b.rating - a.rating),
      'asc-alpha': (products) => products.sort((a, b) => a.title.localeCompare(b.title)),
      'des-alpha': (products) => products.sort((a, b) => b.title.localeCompare(a.title)),
      asc: (products) => products.sort((a, b) => a.price - b.price),
      des: (products) => products.sort((a, b) => b.price - a.price)
    };
    if (products && !category) {
      const sortedProducts = sortFunctions[sortType]([...products]);
      setFilteredProducts(sortedProducts);
    }
    if (products && category) {
      const temp = products.filter((product) => product.category === category);
      const sortedProducts = sortFunctions[sortType](temp);
      setFilteredProducts(sortedProducts);
    }
  }, [products, sortType, category]);

  // useEffect(() => {

  //   const sortProducts = (type) => {
  //     if (sortFunctions[type]) {
  //       const sortedProducts = [...filteredProducts];
  //       setFilteredProducts((sortedProducts));
  //     }
  //   };

  //   // sortProducts(sortType);
  // }, [sortType]);

  // const filterProducts = (category) => {
  //   const temp = products.filter((product) => product.category === category);
  //   setFilteredProducts(temp);
  // };

  const clearCategory = () => {
    setActive();
    setCategory();
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
                setCategory={setCategory}
                active={active}
                setActive={setActive}
              />
            </div>
            <div>
              <label htmlFor="sorting">
                Sort By:
                <select name="sorting" id="sorting" onChange={(e) => setSoryType(e.target.value)}>
                  <option value="rating">Recommended</option>
                  <option value="asc-alpha">Alphabetical: A-Z</option>
                  <option value="des-alpha">Alphabetical: Z-A</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="des">Price: High to Low</option>
                </select>
              </label>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
                {filteredProducts?.map((card) => (
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
