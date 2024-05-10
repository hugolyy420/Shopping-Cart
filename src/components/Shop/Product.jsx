import { useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../API/useFetch';
import EmblaCarousel from '../Carousel/Emblacarousel';

const Product = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const url = `https://dummyjson.com/products/${id}`;
  const { products, isLoading, error } = useFetch(url);
  console.log(state);
  const OPTIONS = {};
  const SLIDE_COUNT = state.images.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  if (id != state.id || !id) return <h1>Product does not exist</h1>;
  return (
    <section className="flex gap-8 items-center w-full flex-col md:flex-row md:items-start">
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} images={state.images} />
          <div>
            <h2 className="text-3xl md:text-4xl font-medium">{state.title}</h2>
            <h3 className="text-base flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              {state.rating}
            </h3>
            <h3 className="text-xl font-bold my-4">${state.price}</h3>
            <p className="border-t-2 border-t-slate-200 py-8">{state.description}</p>
            <button type="button" className="p-4 bg-sky-700 text-slate-50 rounded-lg">
              Add to Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
