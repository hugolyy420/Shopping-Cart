import { Shop } from '../../components/Shop/Shop';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import mockData from '../Mock-data/mock-data';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Pagination from '../../components/Shop/Pagination';

vi.mock('../../components/API/useFetch', () => ({
  useFetch: () => ({
    products: mockData,
    isLoading: false,
    error: null
  })
}));

describe('Shop', () => {
  it('renders fetched items', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<Shop />}>
            <Route path="/" element={<Pagination />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const cards = await screen.findAllByRole('img');
    expect(cards.length).toBe(3);
  });

  it('filters products according to category', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<Shop />}>
            <Route path="/" element={<Pagination />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const filterButton = await screen.findByRole('link', { name: /smartphones/i });
    await user.click(filterButton);
    expect(screen.getAllByRole('img').length).toBe(1);

    screen.debug();
  });

  it('clears category onclick', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<Shop />}>
            <Route path="/" element={<Pagination />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const filterButton = await screen.findByRole('link', { name: /smartphones/i });
    await user.click(filterButton);
    expect(screen.getAllByRole('img').length).toBe(1);
    const clearFilterButton = await screen.findByRole('link', { name: /Clear Category/i });
    await user.click(clearFilterButton);
    expect(screen.getAllByRole('img').length).toBe(3);
  });

  it('sorts products according to rating', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<Shop />}>
            <Route path="/" element={<Pagination />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const cards = await screen.findAllByRole('img');
    expect(cards[0].src).toContain(mockData[2].thumbnail);
  });
});
