import ImageOne from './Home-image-1.jpg';
import { Link } from 'react-router-dom';
import illustrationOne from './Home-illustration-1.svg';
import { useFetch } from '../API/useFetch';
import Card from '../Shop/Card';

export const Home = () => {
  const { products, isLoading, error } = useFetch('https://dummyjson.com/products?limit=4');
  return (
    <>
      {isLoading && (
        <div className="text-center h-screen flex flex-col items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
      {!isLoading && products && (
        <>
          <section className="relative h-[30rem] md:h-[50rem] flex items-center p-20 md:p-[10rem] bg-gray-900 bg-opacity-80">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
              style={{ backgroundImage: `url(${ImageOne})` }}></div>

            <div className="relative flex flex-col gap-4 z-10 md:w-72">
              <h2 className="text-white font-bold text-3xl">We Have What You Want.</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum hic debitis dolores
                amet, quisquam aliquid beatae eligendi eum cum sapiente, corrupti dolor harum
                blanditiis quod doloribus magni eaque culpa! Alias.
              </p>
              <Link
                to="/shop"
                className="bg-sky-700 text-slate-50 p-4 rounded-lg self-start hover:bg-sky-500 transition-colors">
                Shop Now
              </Link>
            </div>
          </section>
          <section className="w-full flex flex-col items-center">
            <div className="max-w-screen-xl flex flex-col items-center p-24 gap-10 lg:flex-row lg:gap-24">
              <img src={illustrationOne} alt="" className="size-64 md:size-96" />
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold">Best Deal Ever</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis exercitationem
                  autem eos, veritatis molestiae labore rem quibusdam, officia optio accusamus quae
                  omnis maxime magni! Perferendis magni maiores voluptates vitae! Aliquid?
                </p>
                <Link
                  to="/shop"
                  className="bg-sky-700 text-slate-50 p-4 rounded-lg self-start hover:bg-sky-500 transition-colors">
                  Check Out Our Deal
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col items-center">
            <div className="max-w-screen-xl flex flex-col items-center gap-20 p-24">
              <h2 className="text-3xl font-bold">Hot Selling Devices</h2>
              <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
                {products.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
