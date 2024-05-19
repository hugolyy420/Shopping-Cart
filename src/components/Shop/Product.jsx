import { useParams } from 'react-router-dom';
import { useFetch } from '../API/useFetch';
import EmblaCarousel from '../Carousel/Emblacarousel';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Product = () => {
  const { id } = useParams();
  const [slides, setSlides] = useState([]);
  const { cartItems, setCartItems } = useOutletContext();
  const url = `https://dummyjson.com/products/${id}`;
  const { products, isLoading, error } = useFetch(url);
  const OPTIONS = {};

  useEffect(() => {
    if (!products) return;
    if (products) {
      const slideCount = products.images.length;
      setSlides(Array.from(Array(slideCount).keys()));
    }
  }, [products]);

  const addItemToCart = (product) => {
    const temp = [...cartItems];
    const isItemPresent = (item) => {
      return temp.some((tempItem) => tempItem.id === item.id);
    };
    if (isItemPresent(product)) {
      const newTemp = temp.map((tempItem) => {
        if (tempItem.id === product.id) {
          return {
            ...tempItem,
            quantity: tempItem.quantity + 1
          };
        }
        return tempItem;
      });

      setCartItems(newTemp);
    } else {
      setCartItems([...temp, { ...product, quantity: 1 }]);
    }
  };

  return (
    <section className="max-w-screen-xl flex gap-8 items-center flex-col md:flex-row md:items-start mx-auto p-8">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && products && (
        <>
          <EmblaCarousel slides={slides} options={OPTIONS} images={products.images} />
          <div>
            <h2 className="text-3xl md:text-4xl font-medium">{products.title}</h2>
            <h3 className="text-base flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              {products.rating}
            </h3>
            <h3 className="text-xl font-bold my-4">${products.price}</h3>
            <p className="border-t-2 border-t-slate-200 py-8">{products.description}</p>
            <button
              type="button"
              className="p-4 bg-sky-700 text-slate-50 rounded-lg"
              onClick={() => addItemToCart(products)}>
              Add to Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
