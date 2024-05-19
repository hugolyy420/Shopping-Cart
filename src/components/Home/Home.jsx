import ImageOne from './Home-image-1.jpg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <section className="relative h-[30rem] md:h-[50rem] flex items-center p-20 md:p-[10rem] bg-gray-900 bg-opacity-80">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${ImageOne})` }}></div>

        <div className="relative flex flex-col gap-4 z-10 md:w-72">
          <h2 className="text-white font-bold text-3xl">Lorem, ipsum dolor.</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum hic debitis dolores
            amet, quisquam aliquid beatae eligendi eum cum sapiente, corrupti dolor harum blanditiis
            quod doloribus magni eaque culpa! Alias.
          </p>
          <Link to="/shop" className="bg-slate-700 text-slate-50 p-4 rounded-lg self-start">
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
};
