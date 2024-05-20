import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import './components/Carousel/embla.css';
import Footer from './Footer/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <main className="flex w-full flex-col relative">
        <Outlet context={{ cartItems, setCartItems }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
