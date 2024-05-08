import Card from './Card';
import { useFetch } from '../API/useFetch';
import { useState } from 'react';

export const Shop = () => {
  const [url, setUrl] = useState('https://dummyjson.com/products?limit=0');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products, isLoading, error } = useFetch(url);
  const categories = products?.map((item) => item.category);
  const filteredCategories = [...new Set(categories)];

  return (
    <>
      <h2 className="text-4xl">Shop</h2>
      <section className="max-w-screen-lg w-full flex">
        {isLoading && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {products && !isLoading && (
          <>
            <div className="w-full max-w-56">
              <h3 className="text-2xl">Category</h3>
              <ul>
                {filteredCategories.map((item, index) => (
                  <li key={index}>
                    <button type="button">{item}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
              {products.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};
