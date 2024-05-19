import Categories from './Categories';
import { useFetch } from '../API/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

export const Shop = () => {
  const { category } = useParams();
  let url;
  if (!category) url = 'https://dummyjson.com/products?limit=0';
  else url = `https://dummyjson.com/products/category/${category}`;
  const { products, isLoading, error } = useFetch(url);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(category);
  const [sortType, setSortType] = useState('rating');
  const [itemOffset, setItemOffset] = useState(0);
  const currentSortType = sortType;

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://dummyjson.com/products/categories', { mode: 'cors' });
      const categories = await response.json();
      setCategories(categories.sort());
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
      setActive(category);
      setFilteredProducts(sortedProducts);
    }
    if (products && category) {
      const temp = [...products];
      const sortedProducts = sortFunctions[sortType](temp);
      setFilteredProducts(sortedProducts);
    }
  }, [products, sortType, category]);

  const clearCategory = () => {
    setActive();
    setItemOffset(0);
  };

  return (
    <section className="w-full flex flex-col items-center p-12">
      {isLoading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {!isLoading && (
        <div className="max-w-screen-xl">
          <h2 className="text-4xl font-bold mb-6">Shop</h2>
          <div className="max-w-screen-xl w-full flex flex-col md:flex-row gap-8">
            <div className="w-full md:max-w-56">
              <h3 className="text-2xl mb-2">Category</h3>
              {active !== undefined && (
                <Link
                  className="p-2 my-2 block hover:bg-red-400 w-full text-center bg-red-700 text-slate-50"
                  onClick={clearCategory}
                  to="/shop">
                  Clear Category
                </Link>
              )}
              <Categories
                categories={categories}
                active={active}
                setActive={setActive}
                setItemOffset={setItemOffset}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="sorting" className="self-end border-2 p-2">
                Sort By:
                <select
                  value={currentSortType}
                  name="sorting"
                  id="sorting"
                  onChange={(e) => setSortType(e.target.value)}>
                  <option value="rating">Recommended</option>
                  <option value="asc-alpha">Alphabetical: A-Z</option>
                  <option value="des-alpha">Alphabetical: Z-A</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="des">Price: High to Low</option>
                </select>
              </label>
              {/* <Outlet
                context={{
                  itemsPerPage: 18,
                  filteredProducts,
                  itemOffset,
                  categories,
                  setItemOffset,
                  sortType
                }}
              /> */}
              <Pagination
                itemsPerPage={18}
                filteredProducts={filteredProducts}
                itemOffset={itemOffset}
                setItemOffset={setItemOffset}
                sortType={sortType}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
