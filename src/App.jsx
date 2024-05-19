import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import './components/Carousel/embla.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <main className="flex w-full flex-col">
        <Outlet context={{ cartItems, setCartItems }} />
      </main>
    </>
  );
}

export default App;
