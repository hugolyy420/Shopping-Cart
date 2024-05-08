import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { useFetch } from './components/API/useFetch';

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl flex w-full flex-col p-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
