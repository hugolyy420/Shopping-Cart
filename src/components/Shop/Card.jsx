import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      state={{ ...product }}
      className="shadow-md p-8 flex flex-col gap-2 items">
      <div className="max-w-48 max-h-48 w-full self-center">
        <img src={product.thumbnail} alt="Product image" className="w-full h-48 object-cover" />
      </div>

      <h3 className="text-lg font-medium">{product.title}</h3>
      <p className="flex-1 flex items-center">
        {' '}
        <svg
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        {product.rating}
      </p>
      <p className="font-bold">${product.price}</p>
    </Link>
  );
};

export default Card;
