import Card from './Card';
import Categories from './Categories';
import { useFetch } from '../API/useFetch';
import { useEffect, useState } from 'react';

export const Shop = () => {
  const [url, setUrl] = useState('https://dummyjson.com/products?limit=0');
  const [categories, setCategories] = useState([]);
  const { products, isLoading, error } = useFetch(url);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://dummyjson.com/products/categories', { mode: 'cors' });
      const categories = await response.json();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const filterProducts = (category) => {
    setUrl(`https://dummyjson.com/products/category/${category}`);
  };

  return (
    <>
      <h2 className="text-4xl mb-6">Shop</h2>
      <section className="max-w-screen-lg w-full flex">
        {isLoading && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {products && !isLoading && (
          <>
            <div className="w-full max-w-56">
              <h3 className="text-2xl mb-2">Category</h3>
              <Categories categories={categories} filterProducts={filterProducts} />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
              {products?.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};
