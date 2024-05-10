import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import './components/Carousel/embla.css';

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl flex w-full flex-col p-8 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
