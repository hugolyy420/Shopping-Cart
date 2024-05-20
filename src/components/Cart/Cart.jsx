import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Cart.css';
import illustrationOne from './Cart-illustration-1.svg';
import { useEffect } from 'react';

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const total = cartItems.reduce((item, prev) => (item += prev.price * prev.quantity), 0);
  const incrementQuantity = (item) => {
    const temp = [...cartItems];
    const newCartItems = temp.map((tempItem) => {
      if (tempItem.id === item.id) {
        return {
          ...tempItem,
          quantity: Number(tempItem.quantity) + 1
        };
      }
      return tempItem;
    });
    setCartItems(newCartItems);
  };
  const decreaseQuantity = (item) => {
    const temp = [...cartItems];
    const newCartItems = temp.map((tempItem) => {
      if (tempItem.id === item.id) {
        return {
          ...tempItem,
          quantity: Number(tempItem.quantity) - 1
        };
      }
      return tempItem;
    });
    if (newCartItems.some((item) => item.quantity < 0)) return;
    setCartItems(newCartItems);
  };
  const removeItem = (item) => {
    const temp = [...cartItems];
    const newTemp = temp.filter((tempItem) => tempItem.id !== item.id);
    setCartItems(newTemp);
  };
  const editQuantity = (event, item) => {
    const re = /^[0-9]{1,2}$/;
    const temp = [...cartItems];
    const newTemp = temp.map((tempItem) => {
      if (tempItem.id === item.id && event.target.value == '') {
        return {
          ...tempItem,
          quantity: 0
        };
      }
      if (tempItem.id === item.id && re.test(event.target.value)) {
        return {
          ...tempItem,
          quantity: event.target.value
        };
      }
      return tempItem;
    });
    setCartItems(newTemp);
  };

  return (
    <section className="max-w-screen-xl mx-auto p-12 md:p-24 ">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-col">
            <h2 className="text-3xl mb-10">Your cart is empty</h2>
            <Link
              to="/shop"
              className="p-4 bg-sky-700 text-slate-50 rounded-lg self-center hover:bg-sky-500 transition-colors">
              Go to Shop
            </Link>
          </div>
          <div>
            <img src={illustrationOne} alt="" className="size-72 md:size-96" />
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-4xl font-bold mb-10">Your Cart</h2>
          <form action="">
            <div className="flex flex-col gap-10 xl:flex-row p-8">
              <ul className="flex flex-col gap-24 flex-1">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="grid justify-around grid-cols-3 items-center justify-items-center gap-10 lg:grid-cols-5">
                    <Link to={`/product/${item.id}`}>
                      <div className="size-24 md:size-36">
                        <img
                          src={item.thumbnail}
                          alt={item.description}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    <h2>{item.title}</h2>
                    <p data-testid="price">${item.price}</p>
                    <div className="border-2 justify-self-center">
                      <button
                        type="button"
                        onClick={() => incrementQuantity(item)}
                        className="bg-stone-300 px-2">
                        +
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        className="w-6 text-center"
                        min={1}
                        max={99}
                        onChange={(event) => editQuantity(event, item)}
                        onInvalid={(event) =>
                          event.target.setCustomValidity('Quantity must be between 1 and 99')
                        }
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item)}
                        className="bg-stone-300 px-2">
                        -
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item)}
                      className="bg-red-700 text-slate-50 p-2 rounded-lg hover:bg-red-500 transition-colors">
                      remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t-2 xl:border-t-0 xl:border-l-2 p-8 flex flex-col">
                <p className="text-2xl font-bold flex gap-8 mb-10">
                  <span className="flex-1">Subtotal:</span>
                  <span className="block">${total}</span>
                </p>
                <button
                  type="submit"
                  className="p-4 bg-sky-700 text-slate-50 rounded-lg hover:bg-sky-500 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default Cart;
