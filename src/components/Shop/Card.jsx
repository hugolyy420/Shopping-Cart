import { Link } from 'react-router-dom';

const Card = ({ thumbnail, title, price, rating }) => {
  return (
    <div className="shadow-md p-8 flex flex-col gap-4">
      <Link>
        <div className="size-48">
          <img src={thumbnail} alt="Product image" className="w-full h-full object-cover" />
        </div>
      </Link>
      <div className="flex-1">
        <Link>
          <h3>{title}</h3>
          <p>${price}</p>
          <p>{rating}</p>
        </Link>
      </div>
      <button type="button">Add to Cart</button>
    </div>
  );
};

export default Card;
